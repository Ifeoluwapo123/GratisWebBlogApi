const db = require("../database/connection")

const { sequelize, Sequelize } = db;

const Post = sequelize.define(
  "post",
  {
    postId: {
      type: Sequelize.UUID,
      unique: true,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
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

Post.associate = (models) => {
  Post.hasMany(require("./comment.model"), {
    onDelete: "cascade",
  });
};

sequelize.sync();

// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = Post;
