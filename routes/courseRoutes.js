const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { ensureOrganiser } = require('../middleware/authMiddleware');

// Public listing
router.get('/courses', courseController.listCourses);

// Admin routes
router.get('/courses/add', ensureOrganiser, courseController.showAddForm);
router.post('/courses/add', ensureOrganiser, courseController.addCourse);
router.get('/courses/edit/:id', ensureOrganiser, courseController.showEditForm);
router.post('/courses/edit/:id', ensureOrganiser, courseController.updateCourse);
router.post('/courses/delete/:id', ensureOrganiser, courseController.deleteCourse);

module.exports = router;
