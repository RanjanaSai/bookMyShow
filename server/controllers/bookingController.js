const bookingModel = require("../models/bookingModel");
const showModel = require("../models/showModel");
const userModel = require("../models/userModel");
const movieModel = rqquire("../models/userModel");
const Stripe = require("stripe");
require('dotenv').config();// load the environment variables
const stripe = Stripe(process.env.STRIPE_KEY);


const sendEmailHelper = require("../utils/sendEmailHelper");

const makePayment = async (req, res) => {
  try {
    const { token, amount } = req.body;

    const email = req.body.token.email;
    //console.log(email);

    const customer = await stripe.customers.create({
      email: email,
      source: req.body.token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      customer: customer.id,
      payment_method_types: ["card"],
      receipt_email: email,
      description: "Token has been assigned to movie !",
    });

    const transactionId = paymentIntent.id;

    res.send({
      success: true,
      message: "Payment Successful",
      data: transactionId,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};


const bookNewShow = async (req, res) => {
  try {
    const newBooking = await bookingModel(req.body);
    await newBooking.save();

    const show = await showModel.findById(req.body.show).populate("movie");
    const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats];
    show.bookedSeats = updatedBookedSeats;
    await show.save();

    const populatedBooking = await bookingModel
      .findById(newBooking._id)
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });

    res.send({
      success: true,
      message: "Show Booked Successfully",
      data: populatedBooking,
    });

    await sendEmailHelper("ticketTemplate.html", populatedBooking.user.email, {
      name: populatedBooking.user.name,
      movie: populatedBooking.show.movie.movieName,
      theatre: populatedBooking.show.theatre.name,
      date: populatedBooking.show.date,
      time: populatedBooking.show.time,
      seats: populatedBooking.seats,
      amount: populatedBooking.seats.length * populatedBooking.show.ticketPrice,
      transactionId: populatedBooking.transactionId,
    }, "Booking Confirmation");
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
}

const getAllBookingsByUser = async (req, res) => {
  try {
    const userId = req.body.userId;

    const bookings = await bookingModel
      .find({ user: userId })
      .populate("show")
      .populate("user")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })

      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });

    res.send({
      success: true,
      message: "All Bookings by User have been fetched",
      data: bookings,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};
module.exports = {
  makePayment,
  bookNewShow,
  getAllBookingsByUser,

}