const express = require('express');
const { createArticle } = require('../controllers/articleController');
const router = express.Router();

router.route('/').post(createArticle);

module.exports = router;
