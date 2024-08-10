const Autobot = require('../models/Autobot');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const fetchData = require('../utils/fetchData');

async function createAutobot() {
  try {
    const user = await fetchData('https://jsonplaceholder.typicode.com/users/1');
    const autobot = await Autobot.create({ name: user.name, email: user.email });

    for (let i = 1; i <= 10; i++) {
      const post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${i}`);
      const createdPost = await Post.create({ title: post.title, body: post.body, AutobotId: autobot.id });

      for (let j = 1; j <= 10; j++) {
        const comment = await fetchData(`https://jsonplaceholder.typicode.com/comments/${j}`);
        await Comment.create({ body: comment.body, PostId: createdPost.id });
      }
    }
  } catch (error) {
    console.error("Error creating Autobot:", error);
  }
}

async function createAutobotsInBatch(batchSize = 500) {
  for (let i = 0; i < batchSize; i++) {
    await createAutobot();
  }
}

module.exports = { createAutobot, createAutobotsInBatch };
