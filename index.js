require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/parth", (req, res) => {
  res.json({
    firstName: "Parth",
    lastName: "Kalra",
    email: "parth.kalra1712@gmail.com",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
