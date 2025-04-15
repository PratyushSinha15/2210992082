const { getTopUsers, getPosts } = require('../services/postService');

async function getTopUsersHandler(req, res) {
  try {
    const data = await getTopUsers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch top users' });
  }
}

async function getPostsHandler(req, res) {
  try {
    const { type } = req.query;
    const data = await getPosts(type);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}

module.exports = {
  getTopUsersHandler,
  getPostsHandler,
};
