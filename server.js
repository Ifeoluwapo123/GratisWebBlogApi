const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

require("./routes/post.route")(app);
require("./routes/comment.route")(app);
app.get("*", (_, res)=> res.status(404).json({message:"resource not found"}))

app.listen(port, (err) => {
  if (err) console.log("error connection");
  else console.log(`subscriber connected to ${port}`);
});

//used in testing Env. for integration testing
module.exports = app;