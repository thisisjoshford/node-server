const http = require ("http");

function onRequest(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("What's up Josh?");
  response.end();
}

http.createServer(onRequest).listen(8888)

