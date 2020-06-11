const express = require('express');
const router  = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");
const Accion = require("../models/Accion.model");


router.post('/accion',(req,res)=>{
  const{name, symbol}=req.body;
  const userId= req.session.currentUser;
  Accion.create({name:name,symbol:symbol,userId:userId})
  .then(accion=>{
    console.log("accion guaradada",accion);
    res.redirect('/userProfile');
  })
  .catch(e=>e)
})

module.exports = router; 