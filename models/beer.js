const query = require("../db");

class Beer {
  constructor(name, url, imageUrl, description) {
    this.name = name;
    this.url = url;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  static all() {
    return query("SELECT * FROM beer ORDER BY id");
  }

  save() {
    var queryText =
      "INSERT INTO beer (name, url, imageUrl,description) VALUES ($1, $2, $3,$4) RETURNING *";
    return query(queryText, [
      this.name,
      this.url,
      this.imageUrl,
      this.description
    ]);
  }
}

module.exports = Beer;
