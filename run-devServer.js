const proxy = require("http-proxy-middleware");
const Bundler = require("parcel-bundler");
const express = require("express");

const options = { cache: false };
const bundler = new Bundler("index.html", options);

const app = express();
const PORT = process.env.PORT || 1234;

app.use(
  "/api/**",
  proxy({
    target: "http://localhost:3000"
  })
);

app.use(bundler.middleware());
app.listen(PORT);
