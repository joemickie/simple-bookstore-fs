const Comment = require('../models/Comment');

async function getCommentsByPost(postId, limit = 10) {
  try {
    const comments = await Comment.findAll({
      where: { PostId: postId },
      limit,
    });
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

module.exports = { getCommentsByPost };
