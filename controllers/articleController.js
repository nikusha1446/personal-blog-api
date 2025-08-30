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

module.exports = { createArticle };
