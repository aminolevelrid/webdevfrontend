const express = require("express");

const Router = express.Router();
Router.get('/',(req,res)=>{
    return res.render('home')
})
Router.get('/signup',(req,res)=>{
    return res.render("signup");
})
Router.get('/login',(req,res)=>{
    return res.render("login");
})
module.exports = Router;