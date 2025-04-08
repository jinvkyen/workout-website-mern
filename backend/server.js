require('dotenv').config()

const mongoose = require("mongoose")

const express = require("express");

const workoutRoute = require("./routes/workouts")

// express app
const app = express()

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoute);

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listening
  app.listen(process.env.PORT, () => {
    console.log("Connected to DB, Listening on port:", process.env.PORT);
  });
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.status(200).json({"message": "Welcome to the app"})
})

