const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Beer = require("./models/beer");
const Voter = require("./models/voter");
const Vote = require("./models/vote");

const getBeers = async () => {
  const beers = await Beer.all();
  console.log(beers);
};

const app = express();

app.use(bodyParser.json());

app.get("/api/beers", (req, res) => {
  Beer.all()
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("GET /beers error", error, req);
    });
});

app.get("/api/voters", (req, res) => {
  Voter.all()
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("GET /voters error", error, req);
    });
});

app.post("/api/voters", (req, res) => {
  const { name } = req.body;
  const voter = new Voter(name);
  voter
    .save()
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log("POST /voters error", error, req.body);
    });
});

app.post("/api/votes", (req, res) => {
  const { voter_id, beer_id, rating, motivation } = req.body;
  const vote = new Vote(voter_id, beer_id, rating, motivation);
  vote
    .save()
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log("POST /votes error", error, req.body);
    });
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Yule Beer listening on port 3000!"));
