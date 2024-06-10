const Post = require('../models/Posts');

exports.addPost = (req, res) => {
    const { postLink, postDescription } = req.body;
    Post.create({ postLink, postDescription })
        .then(newPost => res.status(201).json(newPost))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getPosts = (req, res) => {
    Post.findAll()
        .then(posts => res.json(posts))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getPostById = (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
        .then(post => {
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(post);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};
