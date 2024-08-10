const commentService = require('../services/commentService');

async function getComments(req, res) {
  try {
    const comments = await commentService.getCommentsByPost(req.params.postId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}

module.exports = { getComments };
