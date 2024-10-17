const shortid = require("shortid");
const URL = require("../models/user");

async function handleShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });

    try {
        const shortID = shortid.generate(); // Use `shortid.generate()` instead of just `shortid()`
        const result = await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visithistory: [],
        });
        return res.render('home',{
            id:shortID
        });
        // return res.json({ id: shortID });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating short URL" });
    }
}

async function handlegetAnalytics(req, res) {
    const shortId = req.params.shortID;
    try {
        const entry = await URL.findOne({ shortId });
        if (!entry) return res.status(404).json({ error: "Short URL not found" });
        
        return res.json({
            totalClicks: entry.visithistory.length,
            analytics: entry.visithistory,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching analytics" });
    }
}

module.exports = { handleShortURL, handlegetAnalytics };
