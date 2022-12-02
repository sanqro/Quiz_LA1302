const { json } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/questions", function (req, res) {
  fs.readFile("data.json", "utf8", function (err, data) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(data);
  });
});

const server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("API running on", host, port);
});
