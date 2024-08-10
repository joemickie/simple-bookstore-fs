const postService = require('../services/postService');

async function getPosts(req, res) {
  try {
    const posts = await postService.getPostsByAutobot(req.params.autobotId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}

module.exports = { getPosts };
