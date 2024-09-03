const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
