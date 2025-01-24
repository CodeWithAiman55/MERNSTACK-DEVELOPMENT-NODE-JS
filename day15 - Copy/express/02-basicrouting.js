const express = require("express");
const app = express();

//how you setup different routes
//app.callDifferentMethods
// app.get()
// app.post()
// app.put()
// app.delete()

// inside app.get we pass two parameter
// path
// call backfunction which takes three parameters such as req, res, next
// inside function we write code whoch we want to run when access to this url
//

app.get("/", (req, res, next) => {
  //if we want to send data back to users
  console.log("Here");

  // res.send("hello Users");
  //we actually create a route at index and someone makes a get request to the route
  //which happens when we navigate to the url
  //render the coode and send response to users
  //but res.send is only for testing purposes

});

app.listen(3000);
