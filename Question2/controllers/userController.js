const { getTopUsers } = require('../services/postService');

async function topUsers(req, res) {
  try {
    const topUsers = await getTopUsers();
    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top users.' });
  }
}

module.exports = { topUsers };
