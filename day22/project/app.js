const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes"); // Import Routes
const checkSession = require("./middleware/checkSession"); // Import Middleware

const app = express();
require("dotenv").config(); // Load environment variables

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(checkSession); // Apply session middleware

// Set View Engine
app.set("view engine", "ejs");

// Use Routes
app.use("/", authRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
