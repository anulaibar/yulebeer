import rp from 'request-promise'
import cheerio from 'cheerio'
import Beer from './models/beer'

const scrapeBeer = async (url) => {
  rp(url)
  .then(html => {
    const $ = cheerio.load(html)
    const beer = new Beer(
      $('title').text(),
      url,
      'https:' + $('#product-image-carousel img').data('ng-src'),
    )
    beer.save()
    .then(result => {
      console.log(result.rows[0])
    })
    .catch(error => {
      console.log('Scraping error', error)
    })
  })
  .catch(error => {
    console.log('Scraping error', error)
  })
}

const lagunitas = 'https://www.systembolaget.se/dryck/ol/lagunitas-holiday-ale-1131203'
const jamtlands = 'https://www.systembolaget.se/dryck/ol/jamtlands-julol-1138203'
const chouffe = 'https://www.systembolaget.se/dryck/ol/nice-chouffe-1136401'

const urls = [
  chouffe
]

for ( let url of urls ) {
  scrapeBeer(url)
}
