const { Schema, model } = require('mongoose');

const accionSchema = new Schema(
  {
    userId:"String",
    name: "String", 
    symbol:"String",    
  }
);

module.exports = model('Accion', accionSchema);