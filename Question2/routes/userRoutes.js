const express = require('express');
const { topUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/users', topUsers);

module.exports = router;
