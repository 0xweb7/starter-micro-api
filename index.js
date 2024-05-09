const { exec } = require("child_process");
var http = require('http');

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('<h1>hello');
    res.end();
}).listen(process.env.PORT || 3000);
