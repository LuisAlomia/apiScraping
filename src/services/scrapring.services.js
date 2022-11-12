const initScarpingWeb = require("../utils/scraper");

async function scraping(search) {
  const data = await initScarpingWeb(search);
  return data;
}

module.exports = { scraping };
