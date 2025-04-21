const bcrypt = require('bcrypt');
const { findOrganiser } = require('../models/user');

function showLogin(req, res) {
  res.render('login', { error: req.query.error });
}

function login(req, res) {
  const { username, password } = req.body;
  console.log("REQ.BODY:", req.body);

  findOrganiser(username, (err, organiser) => {
    if (err || !organiser) {
      return res.redirect('/login?error=User not found');
    }

    console.log('User from DB:', organiser);
    console.log('Typed password:', password);
    console.log('Stored hash:', organiser.password);


    bcrypt.compare(password, organiser.password, (err, match) => {
        console.log('Password match result:', match);
      if (match) {
        req.session.user = { username: organiser.username, role: 'organiser' };
        res.redirect('/dashboard');
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