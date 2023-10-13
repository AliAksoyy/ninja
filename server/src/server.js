const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get("/", (req, res) => {
  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "todos.json"), "utf8")
  );
  res.json(todos);
});

app.post("/", (req, res) => {
  const todo = req.body;

  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "todos.json"), "utf8")
  );
  todos.push(todo);

  fs.writeFileSync(
    path.join(__dirname, "todos.json"),
    JSON.stringify(todos),
    "utf-8"
  );

  res.json(todos);
});
app.listen(5000, () => {
  console.log("app started");
});
