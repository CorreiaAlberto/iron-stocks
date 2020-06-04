const express = require('express');
const router = express.Router();
const axios = require("axios")
const dotenv = require("dotenv")

const key = "B0MTL1WQAB5KL5H7";
const functionName = 'TIME_SERIES_DAILY';

router.get("/show-company/:symbol", (req, res) => {
  console.log(req.query.symbol)

const symbolName = req.query.symbol;
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

const getStocksInfo = 
axios
  .get(apiUrl)
  .then(responseFromAPI => {
    console.log(responseFromAPI.data)
   // printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => console.log('Error while getting the data: ', err));

  res.render("show-company", {symbol:req.query.symbol})
})


module.exports = router;