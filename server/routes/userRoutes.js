const router = require('express').Router();
const { createUser, readUser, getCurrentUser, forgotPassword, resetPassword } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const userModel = require('../models/userModel');

router.post('/register', createUser);
router.post('/login', readUser);
router.get('/get-current-user', authMiddleware, getCurrentUser); // protected route
router.patch("/forgot-password", forgotPassword);
router.patch("/reset-password", resetPassword);

module.exports = router;