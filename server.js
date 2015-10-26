var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();

module.exports = function (port)
{
    app.use('/', express.static(__dirname));

    var server = http.createServer(app).listen(port, function ()
    {
        var host = server.address().address;
        console.log('Here\'s my number: http://%s:%s. Call me, maybe?', host, port);
    });
};
