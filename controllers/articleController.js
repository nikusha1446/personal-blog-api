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

const getArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve article' });
  }
};

const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;

  try {
    const updatedArticle = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        tags,
      },
    });
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.article.delete({
      where: { id },
    });
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
};
