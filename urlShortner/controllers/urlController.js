const { urlMod } = require('../models/urlModel');
const { nanoid } = require('nanoid');
async function generateUrl(req, res) {
  try {
    const { actualurl } = req.body;
    if (!actualurl) {
      return res.status(400).json({ error: "URL is mandatory" });
    }
    const shortUrl = nanoid(8);
    const newUrl = await urlMod.create({
      shorturl: shortUrl,
      actualurl: actualurl
    });
    return res.status(201).json({
      shortUrl: shortUrl,
      data: newUrl
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
}
module.exports = { generateUrl };
