const express=require('express');
const app=express();
var path = require('path');
var port=process.env.PORT||8080;

app.use('/assets',express.static('assets'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port,() => {
    console.log("Server Up  → PORT "+port);
});
