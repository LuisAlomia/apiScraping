const initScraping = require("../utils/scrapingCheeiro");

async function scraping(search) {
  const data = await initScraping(search);
  return data;
}

module.exports = { scraping };
