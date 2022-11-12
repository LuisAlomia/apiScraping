const scrapingServices = require("../services/scrapring.services");

function scraping(req, resp) {
  const searching = req.params.search;

  scrapingServices
    .scraping(searching)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
}

module.exports = { scraping };
