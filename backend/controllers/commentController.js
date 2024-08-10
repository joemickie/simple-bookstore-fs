const Comment = require('../models/Comment');

async function getComments(req, res) {
  const comments = await Comment.findAll({ where: { PostId: req.params.postId }, limit: 10 });
  res.json(comments);
}

module.exports = { getComments };
