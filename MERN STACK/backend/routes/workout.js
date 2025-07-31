const express = require('express');
const { getWorkouts,
        getAWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout
 } = require('../controllers/WorkoutController');

const router = express.Router();

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getAWorkout)

//POST a new workout
router.post('/', createWorkout)

//PATCH (update) a workout
router.patch('/:id', updateWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout);

module.exports = router;