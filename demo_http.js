var http = require('http');
//create a server object:
http.createServer(function( req, res ) {
    res.write('Welcome To Nodejs'); // write a response to the client
    res.end(); //end the response

}).listen(8081); // The server objects listen on port 8081