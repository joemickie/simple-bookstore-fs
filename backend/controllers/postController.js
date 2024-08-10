const Post = require('../models/Post');

async function getPosts(req, res) {
  const posts = await Post.findAll({ where: { AutobotId: req.params.autobotId }, limit: 10 });
  res.json(posts);
}

module.exports = { getPosts };
