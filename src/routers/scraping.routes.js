const router = require("express").Router();
const scrapingControllers = require("../controllers/scraping.controllers");

router.get("/", scrapingControllers.scraping);
router.get("/:search", scrapingControllers.scraping);

module.exports = router;
