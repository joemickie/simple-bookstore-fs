const Post = require('../models/Post');

async function getPostsByAutobot(autobotId, limit = 10) {
  try {
    const posts = await Post.findAll({
      where: { AutobotId: autobotId },
      limit,
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

module.exports = { getPostsByAutobot };
