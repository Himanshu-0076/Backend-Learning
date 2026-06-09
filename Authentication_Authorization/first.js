const express = require("express");
const app = express()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/kuch", (req, res)=> {
    res.cookie("name", "himanshu");
    res.send("Done")
})

app.get("/read", (req, res)=> {
    // console.log(req.cookies)
    res.send("read Page")
})

app.get('/', (req,res)=> {
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("pollolololo", salt, function(err, hash) {
//         console.log(hash)
//     });
// });

// bcrypt.compare("pollolololo", "$2b$10$.RC8LEDeluYI1yfTz/dS6e9gTCkaPUtQQV1A46Uj93nSoj35lvJ.a", function(err, result) {
//     console.log(result)
// });

let token = jwt.sign({email: "abc@example.com"}, "secret");
res.cookie("token", token);
res.send("Done")

})

app.get("/read", (req, res)=> {
   let data =  jwt.verify(req.cookies.token, "secret")
   console.log(data)
})

app.listen(3000)