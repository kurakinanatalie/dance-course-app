const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const { listAllClasses } = require('../controllers/classController');
const { ensureOrganiser } = require('../middleware/authMiddleware');

// course list
router.get('/courses/:courseId/classes', classController.listClasses);

router.get('/classes', listAllClasses); // classes list

// for organisers only
router.get('/courses/:courseId/classes/add', ensureOrganiser, classController.showAddForm);
router.post('/courses/:courseId/classes/add', ensureOrganiser, classController.addClass);
router.get('/classes/edit/:classId', ensureOrganiser, classController.showEditForm);
router.post('/classes/edit/:classId', ensureOrganiser, classController.updateClass);
router.post('/classes/delete/:classId', ensureOrganiser, classController.deleteClass);
router.get('/classes/add', ensureOrganiser, classController.showGlobalAddForm);
router.post('/classes/add', ensureOrganiser, classController.addClassFromGlobal);

module.exports = router;