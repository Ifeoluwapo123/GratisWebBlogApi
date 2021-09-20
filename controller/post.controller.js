const Post = require("../model/post.model");
const Comment = require("../model/comment.model");
const pagination = require("../utilities/helperMethods");
const { getPagination, getPagingData } = pagination;

// Create and Save a new blog post
exports.create = (req, res) => {
  // Create a post object
  const post = {
    title: req.body.title,
    description: req.body.description,
  };

  // Save post in the database
  Post.create(post)
    .then((data) => {
      res.status(201).json({ user: "anonymous", post: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the blog post.",
      });
    });
};

// Retrieve all blog posts from the database.
exports.findAll = (req, res) => {
  Post.findAll().then((posts) => {
    res.status(200).json({ posts: posts });
  });
};

// Find a single blog post with an id
exports.findOne = (req, res) => {
  const uuid = req.params.id;

  Post.findByPk(uuid)
    .then((data) => {
      res.status(200).json({ user: data ? "anonymous" : "", post: data || {} });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving blog post with id=" + uuid,
      });
    });
};

// Update a blog post by the id in the request
exports.update = (req, res) => {
  const uuid = req.params.id;

  Post.update(req.body, {
    where: { postId: uuid },
  })
    .then((num) => {
      if (num == 1) {
        res.status(201).send({
          message: "blog post was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update blog post with id=${uuid}. Maybe post was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error updating blog post with id=" + uuid,
      });
    });
};

// Delete a blog post with the specified id in the request
exports.delete = (req, res) => {
  const uuid = req.params.id;

  Post.destroy({
    where: { postId: uuid },
  })
    .then((num) => {
      if (num == 1) {
        res.status(201).send({
          message: "blog post was deleted successfully!",
        });
        Comment.destroy({ where: { postId: uuid } });
      } else {
        res.send({
          message: `Cannot delete blog post with id=${uuid}. Maybe post was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete blog post with id=" + uuid,
      });
    });
};

// find all published Tutorial
exports.findAllByPage = (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = getPagination(page, size);

  Post.findAndCountAll({ limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blog posts.",
      });
    });
};
