const { fileLoader } = require("ejs");
const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); // staric files express is apth pr dudhega [path.join(__dirname, 'public')] path de rha ha 
app.set("view engine", "ejs");

app.get("/", function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files});
    })
})

app.get("/file/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8", function(err, filedata){
        // console.log(req.params.filename, filedata)
        res.render("show", {filename: req.params.filename, filedata: filedata});
    })
})

app.post('/create', function(req, res){
    var filePath = req.body.title
    console.log(filePath)
    fs.writeFile(`./files/${filePath.split(" ").join("")}.txt`, req.body.details, function(err){
        if(err){
            console.error(err.message)
        }
        else {
            res.redirect("/")
            console.log("file create successiful ")
        }
    })
})


// //  /// /// // //// /// // // / // /// // / / // / // / / 
app.get("/edit/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render("edit", {filename: req.params.filename, filedata: filedata})
    })
})


app.post("/update/:filename", function(req, res){
    fs.writeFile(`./files/${req.params.filename}`, req.body.newdetails, function(err){
        if(err){
            console.error(err.message)
        }
        else {
            res.redirect("/")
        }
    })
})

app.listen(3001, function(){
    console.log("Yooooooo Server running.....");
})

