console.log("It works");
var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log("a request has started");
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   console.log("the request has completed");
   response.end('Hello World\n');
}).listen(3000);

// Console will print the message
// console.log('Server running at http://127.0.0.1:3000/');

var fruits = ["apple", "orange", "lime"];
for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
