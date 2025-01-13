const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const uuid = require("uuid");

function customMiddlewares(req,res,next){
  console.log("From middlewares");
  next();
}
app.use(customMiddlewares);

app.use(express.json());

const todos = [
   { id: 1, description: "Learn Express.js", completed: false },
  { id: 2, description: "Build a to-do app", completed: false },
];

//GET, POST METHOD
app.get("/", (req, res, next) => {
  res.send("This is home page for our todo list app");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  console.log(req.params.id);
  let todo = todos.filter((todo) => todo.id == req.params.id)
  res.json(todo);
});

app.post("/todos", (req, res) => {
  let body = req.body;
  console.log(body);
  todos.push({id: uuid.v4(), ...body});
  res.json(todos);
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
