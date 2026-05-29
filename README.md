# Movie Ticket Booking Application

A full-stack Movie Ticket Booking Application inspired by platform like BookMyShow. This project allows users to browse movies, book tickets, select seats, make secure payments, and manage bookings. Admins can manage movies and theatre partners manage shows, theaters. Users can book tickets through dedicated dashboards.

---

# Features

## User Features

* User authentication and authorization
* Browse movies and show timings
* Search movies by title, language, or genre
* Seat selection system
* Online ticket booking
* Payment gateway integration
* Booking history management
* Receive Email for booked tickets
* Responsive UI for desktop 

## Admin Features

* Manage users
* Approve/reject theater partners
* Manage movies and categories
* Monitor bookings 
* Dashboard analytics

## Theater Partner Features

* Add and manage theaters
* Add movie shows and timings
* Manage seat layouts


---

# Tech Stack

## Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Axios
* AntDesign

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## Payment Integration

* Stripe 

## Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

# Project Structure

<img width="227" height="275" alt="image" src="https://github.com/user-attachments/assets/a3cf8867-d555-4a71-9a13-5fe1583fac33" />



---

# Installation and Setup

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB Atlas Account

---

## Clone Repository


git clone https://github.com/RanjanaSai/bookMyShow.git
cd bookMyShow


# Backend Setup


cd server
npm install



Create a `.env` file inside the `server` folder:


PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_secret_key
```

Run backend server:

npx nodemon sever.js

---

# Frontend Setup


cd client
npm install
```



Run frontend server:


npm start


---

# Build Commands

## Frontend Build


npm run build
```


---

# API Endpoints

## Authentication Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/user/register | Register user    |
| POST   | /api/user/login    | Login user       |
| GET    | /api/user/profile  | Get user profile |

## Movie Routes

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| GET    | /api/movies     | Get all movies |
| POST   | /api/movies     | Add movie      |
| PUT    | /api/movies/:id | Update movie   |
| DELETE | /api/movies/:id | Delete movie   |

## Booking Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/bookings      | Create booking    |
| GET    | /api/bookings/user | Get user bookings |

---

# Authentication

The application uses:

* JWT (JSON Web Token) for authentication
* bcryptjs for password hashing
* Protected routes for secure access

---

# Payment Gateway Flow

1. User selects seats
2. Booking details are sent to backend
3. Payment gateway session/order is created
4. User completes payment
5. Payment verification occurs
6. Booking confirmation is stored in database

---

# Deployment

## Frontend Deployment

Deploy frontend on:

* Render


## Backend Deployment

Deploy backend on:

* Render

### Example Render Build Command

```bash
npm install
```

### Example Render Start Command

```bash
npm start
```

---

# Screenshots


* Home Page
  <img width="944" height="440" alt="image" src="https://github.com/user-attachments/assets/fb8db684-814d-4318-9c19-ef1187fb61d5" />

* Admin Dashboard and Movie Listings
  <img width="947" height="494" alt="image" src="https://github.com/user-attachments/assets/0e01dab4-c220-4da2-a120-467d84cfdc29" />

* Admin Dashboard and Theatre Listing
  <img width="956" height="443" alt="image" src="https://github.com/user-attachments/assets/b76cc2c0-12ce-431b-b4e6-f6726741d6df" />
* Partner Page
  <img width="958" height="442" alt="image" src="https://github.com/user-attachments/assets/e5db034b-267c-4358-99c0-45463105d564" />

* Booking Show
  <img width="958" height="495" alt="image" src="https://github.com/user-attachments/assets/f5579d91-35fb-4445-8c40-3f5935a97e9f" />

  
* Seat Selection
  <img width="956" height="478" alt="image" src="https://github.com/user-attachments/assets/2015f64c-ed1f-4d97-84cd-147c590d5373" />



* Payment Page
<img width="939" height="500" alt="image" src="https://github.com/user-attachments/assets/58fa295b-aad0-4ecb-9d0c-ada04b1e1676" />

  <img width="945" height="494" alt="image" src="https://github.com/user-attachments/assets/01a3a1b8-899d-4e4d-8fc4-26003fc5693a" />


  
* Profile page
  <img width="950" height="491" alt="image" src="https://github.com/user-attachments/assets/c7b4dd36-3fb0-4371-b45b-9745e248d209" />


* Admin Dashboard
  <img width="938" height="446" alt="image" src="https://github.com/user-attachments/assets/c1f6d721-65c0-49af-817e-4b5e456609a1" />

* Theater Dashboard
  <img width="956" height="386" alt="image" src="https://github.com/user-attachments/assets/712c9d3a-88f4-48c0-88c3-bbecad2a4f60" />

---

# Future Enhancements

* AI-based movie recommendations
* Real-time seat locking
* QR code ticket system
* Multi-language support
* Dark mode support

---

# Learning Outcomes

Through this project, the following concepts were implemented and learned:

* Full-stack MERN development
* REST API creation
* Authentication and Authorization
* State management using Redux Toolkit
* Database design using MongoDB
* Payment gateway integration
* Deployment and hosting

---

# Contributor

* Ranjana Bhanage

---

# License

This project is developed for educational and academic purposes.

---

# References

* React Documentation: [https://react.dev/](https://react.dev/)
* Node.js Documentation: [https://nodejs.org/](https://nodejs.org/)
* Express.js Documentation: [https://expressjs.com/](https://expressjs.com/)
* MongoDB Documentation: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* Redux Toolkit Documentation: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
* Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
