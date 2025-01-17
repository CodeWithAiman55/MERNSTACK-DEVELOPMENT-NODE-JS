


const express = require('express');
const app = express();

//How to render an html file
//pass a file you want to render
//first tell our app where these files are 
//bydefault all index fiels are inside views folder
// Error: No default engine was specified and no extension was provided.
// we dont have any view engine setup
//using server to output your views
//using ejs bacuse it is very similar to html
//running server code to geenrte the code inside views


//tell our application to use view engine
//you can also pass information from your server into views
// by passing second parameter
//render takes second parameter which is an object

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
  console.log("Here")
  res.render("index",{text:"world"})
})

app.listen(3000);