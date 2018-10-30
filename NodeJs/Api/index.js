/*
*
* Rest Api test for monitoring sites
*
*/

const http = require("http");
const url = require("url");
const StringDecoder = require('string_decoder').StringDecoder;

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);

    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    console.log("path = " + trimmedPath);

    var method = req.method.toLowerCase();

    console.log("method = " + method);

    var queryStringObject = parsedUrl.query;

    console.log("Query string is : ", queryStringObject);

    var headers = req.headers;

    console.log("headers : ", headers)

    //body
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data) {
        buffer += decoder.write(data);
    });
    req.on('end', function() {
        buffer += decoder.end();

        res.end("hello world!");

        console.log("Body : " + buffer);
    });
});

server.listen(3000, function() {
    console.log("server listening on port 3000");
});

