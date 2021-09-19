const Sequelize = require("sequelize");

const sequelize = new Sequelize("blogDb", "root", "mysqlroot", {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  port: process.env.DATABASE_PORT,
  protocol: null,
  logging: false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
