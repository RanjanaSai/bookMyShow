const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
//const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes');
const movieRoute = require('./routes/movieRoutes');
const theatreRoute = require('./routes/theatreRoutes');
const showRoute = require('./routes/showRoutes');
const bookRoute = require('./routes/bookingRoutes');

require('dotenv').config();// load the environment variables

//connect to the database
connectDB(process.env.DB_URL);

const app = express();
const PORT = 8080;



// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100,// Limit each IP to 100 requests per windowsMs
//     message: "Too many requests from this IP, Please try agian later after 15 minutes."
// })

//app.use(mongoSanitize());

app.use(helmet({
    contentSecurityPolicy: false,
})
);
app.use(express.json());//parse incoming json request
app.use(cors());// allowing CORS requests

const clientBuildPath = path.join(__dirname, "../client/build");
console.log(clientBuildPath);
app.use(express.static(clientBuildPath));



//apply rate limiter middleware
// app.use('/api/', apiLimiter);

app.use('/api/user', userRoute)
app.use('/api/movie', movieRoute)
app.use('/api/theatre', theatreRoute);
app.use('/api/show', showRoute);
app.use('/api/booking', bookRoute);


app.use((req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});