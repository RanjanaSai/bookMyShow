

const bookingModel = require("../models/bookingModel");
const showModel = require("../models/showModel");


const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();
const {
    makePayment,
    bookNewShow,
    getAllBookingsByUser,

} = require("../controllers/bookingController");


router.post("/make-payment", makePayment);
router.post("/book-show", bookNewShow);
router.get("/all-booking-by-user", authMiddleware, getAllBookingsByUser);

module.exports = router;
