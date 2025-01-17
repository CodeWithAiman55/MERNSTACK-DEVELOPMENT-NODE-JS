import url from 'url';

const myURL = new URL('https://www.geeksforgeeks.org:8080/how-to-use-an-es6-import-in-node-js?query=string/#hash');

console.log(myURL.hash); 
console.log(myURL.host); 
console.log(myURL.hostname); 
console.log(myURL.href); 
console.log(myURL.pathname); 
console.log(myURL.port);  
console.log(myURL.protocol);  
console.log(myURL.search);  
console.log(myURL.searchParams);  
console.log(myURL.toString());  
console.log(myURL.toJSON());  
