const fs = require('fs');

fs.writeFile("Hey.txt","Hii this is first file",function(err){
    if(err) console.error(err)
    else console.log("done")
})

fs.appendFile("Hey.txt",",and this the appended text next ot previous thxt.", function(err){
    if(err) console.error(err)
    else console.log("done")
})

fs.rename("Hey.txt", "Hii.txt", function(err){
    if(err) console.error(err)
    else console.log("Done")
})

fs.copyFile("Hii.txt", "./copy/copy.txt", function(err){
    if(err) console.error(err)
    else console.log("done dona done")
})

fs.unlink("Hey.txt", function(err){
    if(err) console.log(err.message);
    else console.log("Removed")
})

fs.rmdir("./copy",{recursive: true},function(err){
    if(err) console.log(err.message);
    else console.log("Removed")
})

fs.rm("./copy/copy.txt", {recursive: true}, function(err){
    if(err) console.err(err.message);
    else console.log("Removed")
})

fs.mkdir("./copy/a/apple", {recursive: true}, function(err){
    if(err) console.log(err.message)
    else console.log("Done create")
} )

fs.rm("./copy/a", {recursive: true}, function(err, path){
    if(err) console.log(err.message)
    else console.log(path,"Removed successifully")
})

fs.readFile("Hii.txt","utf8", function(err, data){
    if(err) console.error(err.message);
    else console.log("data:- ", data)
})

fs.readdir("./copy", function(err, files){
    if(err) console.log(err.message)
    else console.log("COpy wali file",files)
})

fs.readFile("./copy/copy.txt","utf8", function(err, data){
    if(err) console.error(err.message);
    else console.log("Copy :- ", data)
})



//  HTTPS :- Hyper text transfer protocol secure