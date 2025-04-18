const bcrypt = require('bcrypt');
const { findOrganiser } = require('../models/user');

function showLogin(req, res) {
  res.render('login', { error: req.query.error });
}

function login(req, res) {
  const { username, password } = req.body;

  findOrganiser(username, (err, organiser) => {
    if (err || !organiser) {
      return res.redirect('/login?error=User not found');
    }

    bcrypt.compare(password, organiser.password, (err, match) => {
      if (match) {
        req.session.user = { username: organiser.username, role: 'organiser' };
        res.redirect('/dashboard'); // можно заменить на реальный путь позже
      } else {
        res.redirect('/login?error=Incorrect password');
      }
    });
  });
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

module.exports = {
  showLogin,
  login,
  logout
};