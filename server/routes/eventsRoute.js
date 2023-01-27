const express = require('express');
const router = express.Router();
const {getEvents, addEvent} = require('../middleware/handleEvents');

router.get('/', getEvents);
router.post('/', addEvent);

module.exports = router;