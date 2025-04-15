const { getUsers, getUserPosts, getPostComments } = require('../services/userService');

async function getAllUsersHandler(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

async function getUserPostsHandler(req, res) {
  try {
    const { userId } = req.params;
    const posts = await getUserPosts(userId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user posts' });
  }
}

async function getPostCommentsHandler(req, res) {
  try {
    const { postId } = req.params;
    const comments = await getPostComments(postId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post comments' });
  }
}

module.exports = {
  getAllUsersHandler,
  getUserPostsHandler,
  getPostCommentsHandler,
};
