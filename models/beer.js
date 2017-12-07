import query from '../db'

class Beer {
  constructor(name, url, imageUrl) {
    this.name = name
    this.url = url
    this.imageUrl = imageUrl
  }

  static all() {
    return query('SELECT * FROM beers')
  }

  save() {
    var queryText = 'INSERT INTO beers (name, url, imageUrl) VALUES ($1, $2, $3) RETURNING *'
    return query(queryText, [this.name, this.url, this.imageUrl])
  }
}

export default Beer
