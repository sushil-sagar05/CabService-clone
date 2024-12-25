const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../Controllers/map.controller');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapController.getCoordinates
);
router.get('/get-distances',
    query('origin').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getDistanceTime
);
router.get('/get-suggestion',
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestion
)
module.exports = router;
