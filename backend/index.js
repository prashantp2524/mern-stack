import express from "express";
import env from "dotenv";

env.config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("hello twitter!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
