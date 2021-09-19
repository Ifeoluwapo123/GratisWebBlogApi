const commentValidator = require("../validators/commentPost.validator");
const updateValidator = require("../validators/commentUpdate.validator");

exports.validateCommentDataCreate = (req, res, next) => {
  const { error } = commentValidator.validate(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });
  else next();
};

exports.validateCommentDataUpdate = (req, res, next) => {
  const { id } = req.params;
  const { error } = updateValidator.validate({ postId: id, ...req.body });

  if (error) return res.status(400).json({ message: error.details[0].message });
  else next();
};

exports.validateUUID = (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 36)
    return res.redirect(req.protocol + "://" + req.get("host"));
  else next();
};
