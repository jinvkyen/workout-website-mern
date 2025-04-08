const express = require("express");

const router = express.Router();

const { createWorkout, getWorkouts, getSingleWorkout, deleteWorkout, updateWorkout,  } = require("../controllers/workoutController");

// get all workouts
router.get("/", getWorkouts);

// get a single workouts
router.get("/:id", getSingleWorkout);

// post a single workout
router.post("/", createWorkout);

// delete a single workout
router.delete("/:id", deleteWorkout);

// get single workouts
router.patch("/:id", updateWorkout);
module.exports = router;
