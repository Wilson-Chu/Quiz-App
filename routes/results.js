const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('results');
}); 
router.get('/:id', (req, res) => {
  res.render('results_id');
}); 

module.exports = router;