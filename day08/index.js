import fs from 'fs';
import http from 'http';

// Step 1: Create a file using fs and write data to it
fs.writeFileSync('example.txt', 'This is the content of the file. It is for demonstration purposes.');

// Step 2: Read and write a specific amount of data using start and end
const readableStream = fs.createReadStream('example.txt', { start: 10, end: 40 });
const writableStream = fs.createWriteStream('output.txt', { flags: 'a' });

readableStream.on('data', function(chunk) {
  writableStream.write(chunk);
  console.log('Chunk written to output.txt: ', chunk.toString());
});

readableStream.on('end', function() {
  console.log('Data read and written to output.txt completed');
});

// Step 3: Serve a static HTML file using HTTP createServer
const writebody = function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.end();
};

http.createServer(writebody).listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
