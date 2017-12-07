import query from '../db'

class Voter {
  constructor(name) {
    this.name = name
  }

  static all() {
    return query('SELECT * FROM voters')
  }

  save() {
    var queryText = 'INSERT INTO voters(name) VALUES($1) RETURNING *'
    return query(queryText, [this.name])
  }
}

export default Voter
