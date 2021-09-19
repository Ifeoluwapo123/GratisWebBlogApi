const postValidator = require("../validators/createBlog.validator");
const updateValidator = require("../validators/updatePost.validator");

exports.validatePostDataCreate = (req, res, next) => {
  const { error } = postValidator.validate(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });
  else next();
};

exports.validatePostDataUpdate = (req, res, next) => {
  const { id } = req.params;
  const { error } = updateValidator.validate({ id, ...req.body });

  if (error) return res.status(400).json({ message: error.details[0].message });
  else next();
};

exports.validateUUID = (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 36) return res.redirect(req.protocol + "://" + req.get("host"));
  else next();
};
