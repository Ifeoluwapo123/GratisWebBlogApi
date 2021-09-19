const db = require("../database/connection");

const { sequelize, Sequelize } = db;

const Comment = sequelize.define(
  "comment",
  {
    commentId: {
      type: Sequelize.UUID,
      unique: true,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    postId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    comment: {
      type: Sequelize.STRING("500"),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updated_at",
    },
  },
  {}
);

sequelize.sync();

Comment.associate = (models) => {
  Comment.belongsTo(require("./post.model"), {
    foreignKey: {
      allowNull: false,
    },
  });
};

// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = Comment;
