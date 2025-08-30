const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const createArticle = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        tags,
      },
    });
    res.status(201).json({ newArticle });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

module.exports = { createArticle, getArticles };
