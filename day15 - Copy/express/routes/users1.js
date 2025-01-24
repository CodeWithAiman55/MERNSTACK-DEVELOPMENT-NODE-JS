/* const express = require('express');
const router = express.Router();

router.use(logger);

router.get("/",(req,res)=>{
  console.log(req.query.name)
  res.send("User Lists");
});
router.get("/new",(req,res)=>{
  // res.send("User New Form");
  // res.render("users/new", {firstName : "Test"});
  res.render("users/new");
});
router.post("/",(req,res)=>{
  // res.send("Create user");
  // console.log(req.body.firstName);
  // res.send("Welcome users")
  const isValid = true;
  if(isValid){
    users.push({firstName: req.body.firstName});
    res.redirect(`/users/${users.length-1}`);
  }else{
    console.log("Error");
    res.render("users/new",{firstName: req.body.firstName})
  }
});
router.route('/:userId').get((req,res)=>{
  console.log(req.user)
  res.send(`Get users with id ${req.params.userId}`);
}).put((req,res)=>{
  res.send(`Update users with id ${req.params.userId}`);
}).delete((req,res)=>{
  res.send(`Delete users with id ${req.params.userId}`);
})

const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("userId", (req,res,next,id)=>{
  console.log(id);
  req.user = users[id];
  next();
})


function logger (req,res,next) {
  console.log(req.originalUrl)
  next();
}

module.exports = router;



//http://localhost:3001/users?name=Muhammad */