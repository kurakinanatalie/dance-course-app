function ensureOrganiser(req, res, next) {
    if (req.session.user && req.session.user.role === 'organiser') {
      return next();
    }
    res.redirect('/login');
  }
  
  module.exports = { ensureOrganiser };  