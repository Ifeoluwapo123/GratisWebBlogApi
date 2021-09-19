const Joi = require("joi");

const updateComment = Joi.object().keys({
  postId: Joi.string().length(36),
  comment: Joi.string().min(4),
});

module.exports = updateComment;
