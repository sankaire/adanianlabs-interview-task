const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'tepelakerenke', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/user/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/checkout');
  }
};

module.exports = { requireAuth };
