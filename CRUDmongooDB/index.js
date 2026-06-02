const express = require('express');
const app = express();
const userModel = require("./userModel")


app.get("/", (req,res) =>{
    res.send("hiiiii")
})

app.get('/create', async (req, res)=> {
    const createdsuer = await userModel.create({
        name: "harsh sharma",
        username: "harsh ",
        email: "harsh@gmail.com"
    })

    res.send(createdsuer)
    // console.log("saab shi ha");

})

app.get("/update", async(req,res) =>{
   const updateUser =  await userModel.findOneAndUpdate({username: "Himans"}, {name: "Himanshu thakur"}, {new: true});
   res.send(updateUser)
//    console.log(updateUser)
})

app.get('/read', async (req, res)=>{
    const users = await userModel.find();
    res.send(users)
})

app.get('/delete', async(req, res) =>{
    const deletedUser = await userModel.findOneAndDelete({_id: "6a1e9be137cc37b4a1d3f254"})
    res.send(deletedUser)
    console.log("deleted successifulll...")
})

app.listen(3000)