const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Booking a course
router.get('/courses/:courseId/book', bookingController.showCourseBookingForm);
router.post('/courses/:courseId/book', bookingController.bookCourse);

// Booking a class
router.get('/classes/:classId/book', bookingController.showClassBookingForm);
router.post('/classes/:classId/book', bookingController.bookClass);

const { ensureOrganiser } = require('../middleware/authMiddleware');

router.get('/courses/:courseId/participants', ensureOrganiser, bookingController.viewCourseParticipants);

router.get('/classes/:classId/participants', ensureOrganiser, bookingController.viewClassParticipants);

module.exports = router;
