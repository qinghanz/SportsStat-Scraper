const axios = require("axios").default;
const cheerio = require("cheerio");
const express = require("express");

var url =
  "https://www.habseyesontheprize.com/2022/7/9/23199869/montreal-canadiens-draft-grade-2022-nhl-picks-juraj-slafkovsky-kirby-dach-filip-mesar-owen-beck";

const app = express();

axios(url)
  .then(function (response) {
    const page = response.data;
    const data = cheerio.load(page);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

app.listen(8000, () => console.log("running on PORT 8000"));
