const express = require('express');
const router = express.Router();
const bookingModel = require('../models/booking');
const { ensureOrganiser } = require('../middleware/authMiddleware');

// all users
router.get('/', ensureOrganiser, (req, res) => {
  bookingModel.getAllBookings((err, participants) => {
    if (err) return res.status(500).send("Error loading participants");
    const enriched = participants.map(p => ({
      ...p,
      relatedId: p.courseId || p.classId,
      typeLabel: p.type === 'course' ? 'Course' : 'Class'
    }));
    res.render('participants/all', { participants: enriched });
  });
});

// user removal
router.post('/:id/delete', ensureOrganiser, (req, res) => {
  bookingModel.deleteBooking(req.params.id, (err) => {
    if (err) return res.status(500).send("Failed to delete");
    res.redirect('/participants');
  });
});

module.exports = router;
