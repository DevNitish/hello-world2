//Starting point of the app
var path =require('path');
var express =require('express');
var app =express();

//To set the view for client site
app.use("/", express.static(path.join(__dirname, 'build')));
// development error handler
// will print stacktrace
let port = 8081;

app.listen(port,function(){
    console.log("running on :",port)
})

module.exports = app;
