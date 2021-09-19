const Joi = require("joi");

const createComment = Joi.object().keys({
  comment: Joi.string().min(4).required(),
  postId: Joi.string().length(36).required(),
});

module.exports = createComment;
