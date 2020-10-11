const query = require("../db");

class Voter {
  constructor(name) {
    this.name = name;
  }

  static all() {
    return query("SELECT * FROM voter");
  }

  save() {
    var queryText = "INSERT INTO voter(name) VALUES($1) RETURNING *";
    return query(queryText, [this.name]);
  }
}

module.exports = Voter;
