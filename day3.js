// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end("Hello World")
// })

// server.listen(3000);

// npm express

const express = require('express')
const app = express();

app.use(function(req, res, next){
    console.log("middleware chala")
    next();
})

app.use(function(req, res, next){
    console.log("middleware dobara chala")
    next();
})

app.get("/", function(req, res){
    res.send("Hellooo THis is the first of the pagee......")
})

app.get("/profile", function(req, res){
    res.send("this is the profile pages ............")
})

app.get("/about", function(req, res, next){
    return next(new Error("not Implemented"))
})

app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send("Something broke...")
})

app.listen(3000)