const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { valorZLK: 1.23 });
});

module.exports = router;
