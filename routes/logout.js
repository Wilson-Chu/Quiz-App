const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('login');
});

router.post('/', (req, res) => {
  // req.session = null;
  res.redirect('login');
});

module.exports = router;