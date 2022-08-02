const express = require('express');
const router = express.Router();
const { getIndex, sendMessage } = require('../controllers/controller');

// get index page
router.route('/').get(getIndex);
// post message
router.route('/message').post(sendMessage);

module.exports = router;