const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const { ensureOrganiser } = require('../middleware/authMiddleware');

// Список занятий для курса
router.get('/courses/:courseId/classes', classController.listClasses);

// Только для организаторов
router.get('/courses/:courseId/classes/add', ensureOrganiser, classController.showAddForm);
router.post('/courses/:courseId/classes/add', ensureOrganiser, classController.addClass);
router.get('/classes/edit/:classId', ensureOrganiser, classController.showEditForm);
router.post('/classes/edit/:classId', ensureOrganiser, classController.updateClass);
router.post('/classes/delete/:classId', ensureOrganiser, classController.deleteClass);

module.exports = router;