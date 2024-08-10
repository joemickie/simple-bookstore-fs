const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  body: { type: DataTypes.TEXT, allowNull: false },
});

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Comment;
