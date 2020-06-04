const express = require('express');
const router = express.Router();
const axios = require("axios")
const dotenv = require("dotenv")

router.get('/search-company', (req, res, next) => {
  res.render('search-company')
})

const key = "B0MTL1WQAB5KL5H7";
const functionName = 'SYMBOL_SEARCH';
const symbolName = 'IBM';
//const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&keywords=${keywords}&apikey=${key}`;

router.post("/search-company", (req, res) => {
  console.log(req.body.company)
  let keywords = req.body.company
  let apiUrl = `https://www.alphavantage.co/query?function=${functionName}&keywords=${keywords}&apikey=${key}`;

  const getCompanyInfo =
    axios
      .get(apiUrl)
      .then(responseFromAPI => {
        console.log(responseFromAPI.data)
        nuevaLista = responseFromAPI.data.bestMatches.map((obj) => {
          return { 'name': obj['2. name'], 'symbol': obj['1. symbol'], 'region': obj['4. region'] }
        })
        res.render('search-company', { lista: nuevaLista })
      })
      .catch(err => console.log('Error while getting the data: ', err));
})


module.exports = router;