const express = require("express");
const passport = require("passport");
const router = express.Router();

// Login View
router.get("/login", (req, res) => {
  res.render("login");
});

// Profile View (Protected Route)
router.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.render("profile", { user: req.user });
});

// Logout View
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

// Handle Login (POST)
router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
}));

module.exports = router;
