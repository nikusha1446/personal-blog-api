const express = require('express');
const {
  createArticle,
  getArticles,
  getArticle,
} = require('../controllers/articleController');
const router = express.Router();

router.route('/').post(createArticle).get(getArticles);
router.route('/:id').get(getArticle);

module.exports = router;
