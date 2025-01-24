const express = require("express"); // Using Express.js framework
const bodyParser = require("body-parser"); // Middleware to parse incoming data
const router = express.Router(); // Sub-router for handling user routes

// Middleware to parse URL-encoded form data
router.use(logger);
router.use(bodyParser.urlencoded({ extended: true }));

// Users array with names and passwords
const users = [
  { name: "Kyle", password: "1234" },
  { name: "Sally", password: "abcd" }
];

// Logger middleware to log the request URL
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}


router.get("/login", (req, res) => {
  res.render("users/login", { error: null }); 
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  let user = null; 

  users.forEach(function (userItem) {
    if (userItem.name === username && userItem.password === password) {
      user = userItem; 
    }
  });

  if (user) {
    res.send(`Welcome ${user.name}`);
  } else {
    console.log("Login failed: Invalid username or password");
    res.render("users/login", { error: "Invalid username or password" });
  }
});


// Export the router to be used in the main app
module.exports = router;
