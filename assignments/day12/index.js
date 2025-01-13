import express from "express";
const app = express();
const port = 8000;

app.use((req, res, next) => {
  console.log("run every time");
  console.log(`logging ${req.method} ${req.url}`);
  next();
});


app.use("/users", (req, res, next) => {
  const { pwd, role } = req.query;

  if (pwd === "hello@1234" && role === "admin") {
    req.userRole = "admin";
    next();
  } else if (pwd === "user@1234" && role === "user") {
    req.userRole = "user";
    next();
  } else {
    res.status(403).send("Forbidden");
  }
});

app.get("/users/:id", (req, res) => {
  if (req.userRole === "admin") {
    res.send("Welcome Admin");
  } else if (req.userRole === "user") {
    res.send("Welcome User");
  } else {
    res.status(403).send("Forbidden");
  }
});

app.get("/admin", (req, res) => {
  res.send("Admin is here");
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});


// http://localhost:8000/users/1/?pwd=hello@1234&role=admin
// http://localhost:8000/users/2/?pwd=user@1234&role=user
// http://localhost:8000/users/1
// http://localhost:8000/users/3/?pwd=invalid&role=admin
// http://localhost:8000/users/4/?pwd=hello@1234&role=user
// http://localhost:8000/admin