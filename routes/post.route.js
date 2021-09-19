const validator = require("../middlewares/postDataValidate");

module.exports = (app) => {
  const posts = require("../controller/post.controller");

  var router = require("express").Router();

  router.get("/pg", posts.findAllByPage);

  // Create a new blog post
  router.post("/", validator.validatePostDataCreate, posts.create);

  // Retrieve all blog posts
  router.get("/", posts.findAll);

  // Retrieve a single blog posts with id
  router.get("/:id", validator.validateUUID, posts.findOne);

  // Update a blog posts with id
  router.put("/:id", validator.validatePostDataUpdate, posts.update);

  // Delete a blog posts with id
  router.delete("/:id", validator.validateUUID, posts.delete);

  app.use("/api/posts", router);
};
