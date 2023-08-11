const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  {
    firstName: string,
  required: true
  },{
  lastName: string,
  required: true
  },{
  password: string,
  required: true
  }                       
})

module.exports = mongoose.model("User", userSchema)
