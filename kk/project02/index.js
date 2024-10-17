const express = require("express");
const path=require('path')
const staticrouter=require("./Routers/static")
const url = require("./Routers/url");
const userrouter=require("./Routers/user.js")
const URL = require("./models/user");
const { connect } = require("./connection");

const app = express();
const port = 8001;


connect("mongodb+srv://ayushagrawalcsaiml22:ayushagrawal@cluster0.vldfe.mongodb.net/youtube255")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB did not connect", err));
    app.set("view engine","ejs")
    app.set('views',path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/",staticrouter);
// app.get("/test", async (req, res) => {
//     try {
//         // Fetch all URLs as an array
//         const allUrls = await URL.find({});

//         // Pass the array of URLs to the EJS template
//         return res.render("home", {
//             urls: allUrls
//         });
//     } catch (error) {
//         console.error("Error fetching URLs:", error);
//         res.status(500).json({ error: "An error occurred while fetching URLs" });
//     }
// });

    /*return res.end (`
       /*<html> 
        <head>
        </head>
        <body>
        <ol>
        ${allurls.modifiedPaths(url=>`<li>${url.shortID}-${url.redirectURL}-${url.visithistory.length}</li>`).join('')}
        </ol>
        </body>
        </html>`)*/
// })
app.use("/url", url);
app.use("/user",userrouter)

app.get("/url/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId: shortID }, // Use `shortId` instead of `shortID` to match the schema field name
            { $push: { visithistory: { timestamps: Date.now() } } }, // Use `timestamp` instead of `timestamps`
            { new: true } // This option returns the modified document
        );
        if (!entry) return res.status(404).json({ error: "Short URL not found" });
        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while redirecting" });
    }
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
