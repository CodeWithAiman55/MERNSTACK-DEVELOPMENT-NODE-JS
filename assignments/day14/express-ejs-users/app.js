const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Dummy user data
const users = [
  { id: 1, name: "Nobita", age: 25 },
  { id: 2, name: "Doraemon", age: 17 },
  { id: 3, name: "Jenny", age: 30 },
];

// Route 1: Fetch all users and render them using EJS
app.get("/users", (req, res) => {
  res.render("users", { users });
});

// Route 2: Fetch user by ID and render user details using EJS
app.get("/users/:id", (req, res) => {
  const user = users.find(userDetails => userDetails.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).render("error", { message: "User not found" });
  }

  if (user.age < 18) {
    return res.status(403).render("error", { message: "Access denied. User is under 18" });
  }

  res.render("user-details", { user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
