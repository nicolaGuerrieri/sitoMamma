var static = require('node-static');
 
var file = new static.Server('./public');
 var port = 8080;
require('http').createServer(function (request, response) {
    request.addListener('end', function () {

        file.serve(request, response);
    }).resume();
}).listen(port, function(){
  console.log("server started on port: " + port);
});