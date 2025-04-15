const express = require('express');
const { getAllUsersHandler, getUserPostsHandler, getPostCommentsHandler } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsersHandler);
router.get('/:userId/posts', getUserPostsHandler);
router.get('/posts/:postId/comments', getPostCommentsHandler);

module.exports = router;
