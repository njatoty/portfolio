const express = require('express');
const router = express.Router();
const { getIndex, sendMessage, getCV } = require('../controllers/controller');

// get index page
router.route('/').get(getIndex);
// post message
router.route('/message').post(sendMessage);
// get cv pdf
router.route('/getcv').post(getCV);

module.exports = router;