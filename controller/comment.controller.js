const Comment = require("../model/comment.model");

// Create and Save a commnet on a blog post
exports.create = (req, res) => {

  // Create a comment object
  const comment = {
    comment: req.body.comment,
    postId: req.body.postId,
  };

  // Save comment in the database
  Comment.create(comment)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the comment on the blog post.",
      });
    });
};

// Retrieve all comments on a blog posts from the database.
exports.findAll = (req, res) => {
  Comment.findAll().then((comments) => {
    res.status(200).json({ comments: comments });
  });
};

exports.findOne = (req, res) => {
  const uuid = req.params.id;

  Comment.findByPk(uuid)
    .then((data) => {
      res.status(200).json({ comment: data || {} });
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

  Comment.update(req.body, {
    where: { commentId: uuid },
  })
    .then((num) => {
      if (num == 1) {
        res.status(201).send({
          message: "comment was updated successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot update comment with id=${uuid}. Maybe post was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error updating comment with id=" + uuid,
      });
    });
};

// Delete a blog post with the specified id in the request
exports.delete = (req, res) => {
  const uuid = req.params.id;

  Comment.destroy({
    where: { commentId: uuid },
  })
    .then((num) => {
      if (num == 1) {
        res.staus(201).send({
          message: "comment was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete comment with id=${uuid}. Maybe post was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete blog post with id=" + uuid,
      });
    });
};
