//use the http module in node and assign it to http (we can actually call http anything we want)
const http = require ("http");
//url allows us to map requests to our request handlers based on the URL path using our router
const url = require ("url");

function start(route, handle){
  function onRequest(request, response){
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + "received.");

    route(handle, pathname, response);
  }
  http.createServer(onRequest).listen(8888)
  console.log("Server has started")
}

exports.start = start;
