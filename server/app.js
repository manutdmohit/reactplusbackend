const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// Linking router files
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware

const middleware = (req, res, next) => {
  console.log("This is middleware tutorial");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/about", middleware, (req, res) => {
  console.log("Hello");
  res.send("This is about page");
});
app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.get("/signin", (req, res) => {
  res.send("This is login page");
});

app.get("/signup", (req, res) => {
  res.send("This is registration page");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
