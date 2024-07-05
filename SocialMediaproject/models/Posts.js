const { DataTypes } = require('sequelize');
const sequelize = require('../util/postdatabase');

const Post = sequelize.define('Post', {
    postLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Post;
