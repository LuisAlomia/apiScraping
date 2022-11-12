const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://listado.mercadolibre.com.co/";

async function initScraping(search) {
  const products = [];
  const { data } = await axios.get(`${url}${search}`);
  const $ = cheerio.load(data);

  const listItems = $(".ui-search-layout__item");

  listItems.each((index, item) => {
    const product = {
      image: $(item).find(".ui-search-result-image__element").attr("src"),
      name: $(item).find(".ui-search-item__title").text(),
      link: $(item).find(".ui-search-link").attr("href"),
      price: $(item)
        .find(
          "div[class='ui-search-price__second-line shops__price-second-line'] span[class='price-tag-fraction']"
        )
        .text()
        .slice(0, 7),
    };

    products.push(product);
  });

  return products;
}

module.exports = initScraping;

initScraping("carros").then((resp) => console.log(resp));
