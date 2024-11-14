const express=require('express')
const path=require('path')
const app=express()
const sd=require("./Data/data.js")

app.set('view engine','ejs')
app.set('views','./views')
app.get('/newform',(req,res)=>{
    res.render("newform.ejs")
})
app.get('/home',(req,res)=>{
    res.render("home.ejs",{sd})
})
app.use(express.urlencoded({extended:false}))
app.get('/home',function(req,res){
    res.send("!hello world")
})
app.get('/About',function(req,res){
    res.send("About me")
})
app.get('/contact',function(req,res){
    res.send("contact me")
})
app.use(express.static(path.join(__dirname,"static")))

app.post('/Information',(req,res)=>{
    const {name,rollno,marks,course}=req.body;
    // console.log(data);
    const st={
        name:name,
        rollno:rollno,
        marks:marks,
        course:course,
    }
    sd.push(st)
    res.redirect("home")
})
app.get("/all",(req,res)=>{
    res.send(sd)
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
});