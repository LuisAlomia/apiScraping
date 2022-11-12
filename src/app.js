const express = require("express");
const cors = require("cors");

const scrapingRouter = require("./routers/scraping.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/scraping", scrapingRouter);

module.exports = app;
