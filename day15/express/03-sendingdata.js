const express = require("express");
const app = express();

app.get("/", (req, res, next) => {

  console.log("Here");

  
  //sending http status code
  // res.sendStatus(500);//Internal Server Error

  //generally we used to send a message with a status

  // sending response in string format
  // res.status(500).send("Hi");

  // sending response in json format
  // res.status(500).json({ message: "Error" });

  //left resonses as success
  // res.json({ message: "Error" });

  //send a file to user to download
  res.download('02-basicrouting.js')
});

app.listen(3000);
