const express = require('express');
const router = express.Router();
const axios = require("axios")
const dotenv = require("dotenv")



router.get("/show-company/", (req, res) => {
  console.log(req.query.symbol)


  res.render("show-company", {symbol:req.query.symbol})
})




module.exports = router; 
