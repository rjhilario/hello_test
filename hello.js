var express = require('express');
var cfenv = require('cfenv');
var app = express();
//var CircularJSON = require('circular-json');
var appEnv = cfenv.getAppEnv();

app.get('/',function (req,res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("ipaddr = " + ip);
    res.send('Hello World');
});

app.listen(appEnv.port,"0.0.0.0",function () {
    console.log('Example app listening on port ' + appenv.url);
}); 
