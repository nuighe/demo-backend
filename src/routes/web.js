const express = require('express');
const router = express.Router();
const { getHomepage, getHomename } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/viet', getHomename);

module.exports = router;