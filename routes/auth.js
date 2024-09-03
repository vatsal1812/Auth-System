const express = require('express'); 
const asyncHandler = require('express-async-handler');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router(); 

// POST /api/auth/register 
router.post('/register', asyncHandler(registerUser));

// POST /api/auth/login 
router.post('/login', asyncHandler(loginUser));

module.exports = router; 
