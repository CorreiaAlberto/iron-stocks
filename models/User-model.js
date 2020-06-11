const {Schema, model} = require("mongoose")

const userSchema = new Schema (
  {
    username: {
      type: String,
      trim: true,
      required: [true, "User name is required."],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      //asegurar formato email desde el servidor
      match: [/^\S+@\S+\.\S+$/, 'Dirección de correo inválida.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    //Password property 
    passwordHash : {
      type: String,
      required: [true, "Password is required."]
    }
}    
 )
  module.exports = model("User", userSchema)