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

const urls = [
  "https://www.systembolaget.se/dryck/ol/nice-chouffe-1136401",
  "https://www.systembolaget.se/dryck/ol/gouden-carolus-1129903",
  "https://www.systembolaget.se/dryck/ol/wonderful-winter-ale-1147515",
  "https://www.systembolaget.se/dryck/ol/hibernation-ale-1133203",
  "https://www.systembolaget.se/dryck/ol/charlis-snofall-1126903",
  "https://www.systembolaget.se/dryck/ol/st-eriks-1136203",
  "https://www.systembolaget.se/dryck/ol/daulne-1129303",
  "https://www.systembolaget.se/dryck/ol/train-station-brewery-1132203",
  "https://www.systembolaget.se/dryck/ol/goteborgs-christmas-1072103",
  "https://www.systembolaget.se/dryck/ol/ballast-point-1117903",
  "https://www.systembolaget.se/dryck/ol/lussebulle-imperial-stout-3406903",
  "https://www.systembolaget.se/dryck/ol/lagunitas-1111803",
  "https://www.systembolaget.se/dryck/ol/osterlen-1141301",
  "https://www.systembolaget.se/dryck/ol/mysingen-midvinterbrygd-1773201",
  "https://www.systembolaget.se/dryck/ol/jamtlands-julol-1138203"
];
// "https://www.dubuisson.com/en/our-beers/bush/bush-de-noel-premium-description/",
// "https://www.vinmonopolet.no/vmp/Land/Belgia/Delirium-Christmas/p/4371601",

for (let url of urls) {
  scrapeBeer(url);
}
