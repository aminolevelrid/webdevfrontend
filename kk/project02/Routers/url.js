const express = require("express");
const { handleShortURL, handlegetAnalytics } = require("../controllers/url");
const Router = express.Router();

Router.post("/", handleShortURL);
Router.get("/analytics/:shortID", handlegetAnalytics); 

module.exports = Router;
