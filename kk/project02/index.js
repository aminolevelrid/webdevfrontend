const express = require("express");
const path = require('path');
const staticrouter = require("./Routers/static");
const url = require("./Routers/url");
const userrouter = require("./Routers/user.js");
const URL = require("./models/user");
const { connect } = require("./connection");
const cookeiparser=require('cookie-parser')
const {restrictToLoggedUserOnly}=require("./middleware/auth.js")

const app = express();
const port = 8002;
(async () => {
    try {
        await connect("mongodb+srv://ayushagrawalcsaiml22:ayushagrawal@cluster0.vldfe.mongodb.net/youtube255");
        console.log("MongoDB connected");
    } catch (err) {
        console.log("MongoDB did not connect", err);
    }
})();

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookeiparser());
app.use("/", staticrouter);

app.use("/url", restrictToLoggedUserOnly,url);
app.use("/user", userrouter);

app.get("/url/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId: shortID }, 
            { $push: { visithistory: { timestamp: Date.now() } } },
            { new: true }
        );
        if (!entry) return res.status(404).json({ error: "Short URL not found" });
        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while redirecting" });
    }
});
app.listen(port, () => console.log(`Server started at port: ${port}`));
