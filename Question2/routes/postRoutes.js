const express = require('express');
const { getTopUsersHandler, getPostsHandler } = require('../controllers/postController');
const router = express.Router();

router.get('/top-users', getTopUsersHandler);
router.get('/posts', getPostsHandler);

module.exports = router;
