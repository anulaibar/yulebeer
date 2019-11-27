const query = require("../db");

class Vote {
  constructor(voter_id, beer_id, rating, motivation) {
    this.voter_id = voter_id;
    this.beer_id = beer_id;
    this.rating = rating;
    this.motivation = motivation;
  }

  static all() {
    return query("SELECT * FROM votes");
  }

  save() {
    var queryText =
      "INSERT INTO votes(voter_id, beer_id, rating, motivation) VALUES($1, $2, $3, $4) RETURNING *";
    return query(queryText, [
      this.voter_id,
      this.beer_id,
      this.rating,
      this.motivation
    ]);
  }
}

module.exports = Vote;
