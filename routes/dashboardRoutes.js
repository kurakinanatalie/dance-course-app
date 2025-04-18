const express = require('express');
const router = express.Router();
const { ensureOrganiser } = require('../middleware/authMiddleware');

router.get('/dashboard', ensureOrganiser, (req, res) => {
  res.render('dashboard', { username: req.session.user.username });
});

module.exports = router;
