const Joi = require("joi");

const createPost = Joi.object().keys({
  title: Joi.string().min(5).required(),
  description: Joi.string().min(20).required(),
});

module.exports = createPost;
