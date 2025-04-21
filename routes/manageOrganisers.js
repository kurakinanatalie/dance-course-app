const express = require('express');
const router = express.Router();
const { createOrganiser } = require('../models/user');
const { ensureOrganiser } = require('../middleware/authMiddleware');

// add organiser
router.get('/add-organiser', ensureOrganiser, (req, res) => {
  res.render('add-organisers');
});

router.post('/add-organiser', ensureOrganiser, (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.render('add-organisers', { error: "All fields required" });
  }

  createOrganiser(username, password, (err) => {
    if (err) {
      return res.render('add-organisers', { error: "Error creating organiser" });
    }
    res.redirect('/dashboard');
  });
});

module.exports = router;