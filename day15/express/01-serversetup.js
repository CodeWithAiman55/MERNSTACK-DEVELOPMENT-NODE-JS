//1. we need to require express library we have downloaded
//2. to setup express server, we make an app variable and calling the express function
//3. to make server actually run call app.listen and pas the port number
//4. app is our server which is listening on port number 3000
//5. open the server on localhost:3000/ 
//6. Cannot GET / because our application does not have any route setup

const express = require('express');
const app = express();
app.listen(3000);