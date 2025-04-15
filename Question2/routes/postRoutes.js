const express = require('express');
const { getPostsData } = require('../controllers/postController');
const router = express.Router();

router.get('/posts', getPostsData);

module.exports = router;
