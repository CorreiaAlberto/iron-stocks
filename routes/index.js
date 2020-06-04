const express = require('express');
const router  = express.Router();
const axios = require("axios")
const dotenv = require("dotenv")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
//Get search page




module.exports = router;

/*const key = "B0MTL1WQAB5KL5H7";
const functionName = 'TIME_SERIES_DAILY';
const symbolName = 'IBM';
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;


const getStocksInfo = 
axios
  .get(apiUrl)
  .then(responseFromAPI => {
    console.log(responseFromAPI)
   // printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => console.log('Error while getting the data: ', err));*/

 