const express = require("express");
const app = express();
const port = 3000;

// Dummy user data
const users = [
  { id: 1, name: "Nobita", age: 25 },
  { id: 2, name: "Doraemon", age: 17 },
  { id: 3, name: "Jenny", age: 30 },
];

// Route 1: Fetch all users from the user array
app.get("/users", (req, res) => {
  res.json(users);
});

// Route 2: Fetch user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(function (userDetails) {
    return userDetails.id === parseInt(req.params.id);
  });

  if (!user) {
    return res.status(404).send("User not found");
  }

  if (user.age < 18) {
    return res.status(403).send("Access denied. User is under 18");
  }

  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
