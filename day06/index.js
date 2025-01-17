import http from 'http';
import fs from 'fs';
import url from 'url';

const myServer = http.createServer((req,res)=>{
  console.log("New request recieved");
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New request recieved\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);
  fs.appendFile('log.txt', log , (err,data) => {
    switch(myUrl.pathname){
      case '/': res.end("Hello from Home Page");
      break;
      case '/about':
      const username = myUrl.query.myname;
      res.end(`Hi, ${username}`);
      break;
      case '/contact': res.end("Hello from Contact Page");
      break;
      case '/search':
      const search = myUrl.query.search_query;
      res.end("Here are your results for " + search);
      break;
      default:
      res.end("404 Not Found");
    }
    // res.end("Hello from server");
  });
  // console.log(req);
  // console.log(req.headers);
  // res.end("Hello from server");
});
//The create server function takes a request listener callback function which can process incoming request

myServer.listen(8000, ()=>{
  console.log("Server started")
})