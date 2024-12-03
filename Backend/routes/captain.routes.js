const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const captainController = require('../Controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name is required'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be atleast 3 characters'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid'),
],
   captainController.registerCaptains
)
router.post('/login',[
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min:6}).withMessage('invalid Passwprd'),
],
captainController.loginCaptain)
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)
router.get('/logout', authMiddleware.authCaptain,captainController.logoutCaptain)
module.exports = router;