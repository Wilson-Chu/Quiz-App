const requireAuth = function(req, res, next) {
  if (req.session.userId) { // Only shows to logged in users - not checking for specific users atm!
    return next();
  } else {
    return res.redirect('/login'); // Redirect to the login page if not authenticated
  }
};

module.exports = { requireAuth };