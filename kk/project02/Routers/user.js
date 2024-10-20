const {handleUserSignup,handleUserlogin} = require("../controllers/user.js");
const express = require("express");
const router = express.Router();
router.post('/', handleUserSignup);
router.post("/login",handleUserlogin)

module.exports = router;
