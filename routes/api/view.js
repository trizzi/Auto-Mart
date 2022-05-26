const express = require('express');
const router = express.Router();

// @route   GET api/view
// @desc     Test Route
// @access    Public
router.get('/', (req, res) => res.send('View route'));

module.exports = router;
