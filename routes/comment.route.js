const validator = require("../middlewares/commentValidate");

module.exports = (app) => {
  const comment = require("../controller/comment.controller");

  var router = require("express").Router();

  // Create a new comment
  router.post("/", validator.validateCommentDataCreate, comment.create);

  // Retrieve all blog comments
  router.get("/", comment.findAll);

  // Retrieve a single blog comment with id
  router.get("/:id", validator.validateUUID, comment.findOne);

  // Update a blog comment with id
  router.put("/:id", validator.validateCommentDataUpdate, comment.update);

  // Dxelete a blog comment with id
  router.delete("/:id", validator.validateUUID, comment.delete);

  app.use("/api/comments", router);
};
