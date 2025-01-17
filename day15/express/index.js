//creating actual express server 
// const express = require('express');
// const app = express(); //setup actual server by calling express function

// app.use(express.static("public"));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

// app.listen(3000);  // server actual works we pass port number
// Cannot GET /
// Means our web application doesnot have any route setup


// //setup different routes
//http method
// app.get()
// app.post()
// app.put()
// app.delete()

// app.get() takes 2 parameter
// 1st is defining the path
// 2nd is passing the call back which takes 3 parameters req,res,next

// app.set("view engine" , "ejs");

// app.get("/", (req,res,next)=>{
  // console.log("Here");
  // res.send("Hi"); //sending response to user bbut send is for testing purpose
  // res.sendStatus(500);
  // res.status(500).send("hi");
  // res.status(500).json({"message":"Error"});
  // res.download("index.js");
  // res.render("index", {text: "world"});
  // res.render("index", { text: "world" });
// })

// const userRouter = require('./routes/users');

// app.use("/users",userRouter)

// app.listen(3001); 


const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const path = require('path');

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use users router
app.use('/users', usersRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
