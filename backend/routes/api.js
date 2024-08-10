const express = require('express');
const autobotController = require('../controllers/autobotController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const rateLimiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/autobots', rateLimiter, autobotController.getAutobots);
router.get('/autobots/:autobotId/posts', rateLimiter, postController.getPosts);
router.get('/posts/:postId/comments', rateLimiter, commentController.getComments);

module.exports = router;
