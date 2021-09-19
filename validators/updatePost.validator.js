const Joi = require("joi");

const updatePost = Joi.object().keys({
  id: Joi.string().length(36),
  title: Joi.string().min(5),
  description: Joi.string().min(20),
});

module.exports = updatePost;
