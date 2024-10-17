const express = require("express");

const Router = express.Router();
Router.get('/',(req,res)=>{
    return res.render('home')
})
Router.get('/signup',(req,res)=>{
    return res.render("signup");
})
module.exports = Router;