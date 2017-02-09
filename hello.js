var express = require('express');
var app = express();
//var CircularJSON = require('circular-json');

app.get('/',function (req,res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("ipaddr = " + ip);
    res.send('Hello World');
});

app.listen(30000,"0.0.0.0",function () {
    console.log('Example app listening on port 30000');
}); 
