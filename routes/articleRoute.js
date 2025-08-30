const express = require('express');
const {
  createArticle,
  getArticles,
} = require('../controllers/articleController');
const router = express.Router();

router.route('/').post(createArticle).get(getArticles);

module.exports = router;
