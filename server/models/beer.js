import query from "../db";

class Beer {
  constructor(name, url, imageUrl, description) {
    this.name = name;
    this.url = url;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  static all() {
    return query("SELECT * FROM beers");
  }

  save() {
    var queryText =
      "INSERT INTO beers (name, url, imageUrl,description) VALUES ($1, $2, $3,$4) RETURNING *";
    return query(queryText, [
      this.name,
      this.url,
      this.imageUrl,
      this.description
    ]);
  }
}

export default Beer;
