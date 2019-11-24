const rp = require("request-promise");
const cheerio = require("cheerio");
const Beer = require("./models/beer");

const scrapeBeer = async url => {
  rp(url)
    .then(html => {
      const $ = cheerio.load(html);
      const name = $("title").text();
      const imageUrl = $("#product-image-carousel img").data("ng-src");
      const description = $(".description")
        .first()
        .text();
      const beer = new Beer(name, url, imageUrl, description);
      beer
        .save()
        .then(result => {
          console.log(result.rows[0]);
        })
        .catch(error => {
          console.log("Scraping error", error);
        });
    })
    .catch(error => {
      console.log("Scraping error", error);
    });
};

const lagunitas =
  "https://www.systembolaget.se/dryck/ol/lagunitas-holiday-ale-1131203";
const jamtlands =
  "https://www.systembolaget.se/dryck/ol/jamtlands-julol-1138203";
const chouffe = "https://www.systembolaget.se/dryck/ol/nice-chouffe-1136401";

const urls = [lagunitas, chouffe, jamtlands];

for (let url of urls) {
  scrapeBeer(url);
}
