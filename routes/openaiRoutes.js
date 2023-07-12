const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

// send pott request to open ai
router.post('/generateimage', generateImage);

module.exports = router;
