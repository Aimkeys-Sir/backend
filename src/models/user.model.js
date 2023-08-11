const User = require("./user.mongo")

async function getUser({id}){
  const user = await User.findOne({id})
  return user
}

async function createUser(userData){
  const user = await User.create(userData)
  return user
}

module.exports = {
  getUser,
  createUser
}
