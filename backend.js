var http = require('http');
var express = require('express');
var app = express();

// GET http://skynet.im/status
app.get('/status', function(req, res) {
    http.get('http://skynet.im/status', function(snres) {
        snres.setEncoding('utf8');
        snres.on('data', function(chunk) {
            res.send(chunk);
        });
    });
});

// GET http://skynet.im/devices?{key}={value}
app.get('/devices', function(req, res) {
    var url = 'http://skynet.im/devices?';
    var key;
    for (key in req.query) {
        url += key + '=' + req.query[key]
    }
    http.get(url, function(response) {
        var data = "";

        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function() {
            res.send(data);
        })
    });
});

// GET http://skynet.im/devices/{UUID}
app.get('/devices/:deviceUID', function(req, res) {
    var url = 'http://skynet.im/devices/' + req.params.deviceUID;
    http.get(url, function(snres) {
        snres.setEncoding('utf8');
        snres.on('data', function(chunk) {
            res.send(chunk);
        });
    });
});


// GET http://skynet.im/events/{UUID}?token={token}
app.get('/events/:deviceUID', function(req, res) {

    var url = 'http://skynet.im/events/' + req.params.deviceUID + '?token=' + req.query.token;
    console.log(url);
    http.get(url, function(snres) {
        snres.setEncoding('utf8');
        snres.on('data', function(chunk) {
            res.send(chunk);
        });
    });
});

app.use("/", express.static(__dirname + '/static'));

app.listen(3000);
console.log('awaiting requests on port 3000');