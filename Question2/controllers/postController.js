const { getPosts } = require('../services/postService');

async function getPostsData(req, res) {
  const { type } = req.query;
  try {
    const posts = await getPosts(type);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
}

module.exports = { getPostsData };
