const express = require('express');
const {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');
const router = express.Router();

router.route('/').post(createArticle).get(getArticles);
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

module.exports = router;
