const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
const port = 4000;

app.listen(port, () => {});

app.get("/all-mds", (req, res) => {
  res.sendFile("javascript/babel.md", { root: "./til/" });
});
