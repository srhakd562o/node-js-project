const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/', postController.addPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);

module.exports = router;
