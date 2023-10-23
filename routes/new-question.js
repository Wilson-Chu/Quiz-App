const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('new-question')
});

module.exports = router;