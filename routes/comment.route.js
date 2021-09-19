const validator = require("../middlewares/commentValidate");

module.exports = (app) => {
  const comment = require("../controller/comment.controller");

  var router = require("express").Router();

  // Create a new blog post
  router.post("/", validator.validateCommentDataCreate, comment.create);

  // Retrieve all blog posts
  router.get("/", comment.findAll);

  // Retrieve a single blog posts with id
  router.get("/:id", validator.validateUUID, comment.findOne);

  // Update a blog posts with id
  router.put("/:id", validator.validateCommentDataUpdate, comment.update);

  // Dxelete a blog posts with id
  router.delete("/:id", validator.validateUUID, comment.delete);

  app.use("/api/comments", router);
};
