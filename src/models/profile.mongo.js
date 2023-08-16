const mongoose = require("mongoose")


const profileSchema = new mongoose.Schema({
  you:{
    type: String
  },
  do:{
    type: String
  },
  love:{
    type: String
  },
  serve:{
    type: String
  },
  beneficiaries:{
    type: String
  },
  transform:{
    type: String
  },
  income:{
    type: String
  },
  user:{
    type: mongoose.Schema.Types.ObjectId
  }
})

module.exports = mongoose.model("Profile", profileSchema)