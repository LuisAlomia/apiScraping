const puppeteer = require("puppeteer");
const randomUseragent = require("random-useragent");

const url = "https://listado.mercadolibre.com.co/";

const initScarpingWeb = async (search) => {
  const data = [];
  const header = randomUseragent.getRandom();
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setUserAgent(header);
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto(`${url}${search}`);
  await page.waitForSelector(".ui-search-results");

  const listItems = await page.$$(".ui-search-layout__item");

  for (const content of listItems) {
    const image = await content.$(".ui-search-result-image__element");
    const name = await content.$(".ui-search-item__title");
    const link = await content.$(".ui-search-link");
    const price = await content.$(
      "div[class='ui-search-price__second-line shops__price-second-line'] span[class='price-tag-fraction']"
    );

    const getName = await page.evaluate((name) => name.innerText, name);
    const getPrice = await page.evaluate((price) => price.innerText, price);
    const getImage = await page.evaluate(
      (image) => image.getAttribute("src"),
      image
    );
    const getLink = await page.evaluate(
      (link) => link.getAttribute("href"),
      link
    );

    data.push({
      name: getName,
      image: getImage,
      price: getPrice,
      link: getLink,
    });
  }
  await browser.close();

  return data;
};

module.exports = initScarpingWeb;
