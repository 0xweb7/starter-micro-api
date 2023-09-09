const { exec } = require("child_process");
var http = require('http');

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('callback');
    res.end();
}).listen(process.env.PORT || 3000);

exec("curl https://eo6zs9q1nkdd0ph.m.pipedream.net/cyclic_call", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
