const express = require('express');
const app = express();
var path = require('path');
var port = process.env.PORT || 8080;


//TimeStamp Function
const getTimestamp = date => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});


app.use('/assets', express.static('assets'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/timestamp',(req,res)=>{
    let timestamp = getTimestamp(new Date());
    res.end(JSON.stringify(timestamp));
});

app.get('/api/timestamp/:dateString',(req,res)=>{
    const dateString = req.url.split("/api/timestamp/")[1];
    if (dateString === undefined || dateString.trim() === "") {
        timestamp = getTimestamp(new Date());
    } else {
        const date = !isNaN(dateString) ?
            new Date(parseInt(dateString)) :
            new Date(dateString);

        if (!isNaN(date.getTime())) {
            timestamp = getTimestamp(date);
        } else {
            timestamp = {
                error: "invalid date"
            };
        }
    }

    res.end(JSON.stringify(timestamp));
});

app.use((req,res,next)=>{
    res.status(400);

    if(req.accepts('html')){
        res.sendFile(path.join(__dirname + '/views/404.html'));
    }
});


app.listen(port, () => {
    console.log("Server Up  → PORT " + port);
});