const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Autobot = require('./Autobot');

const Post = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false, unique: true },
  body: { type: DataTypes.TEXT, allowNull: false },
});

Autobot.hasMany(Post);
Post.belongsTo(Autobot);

module.exports = Post;
