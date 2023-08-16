const { createProfile, getProfile } = require("../../models/profile.model")

async function httpCreateProfile(req, res) {
  const userId = req.user.id
  const data = req.body

  const profile = await createProfile(data, userId)

  return res.json(profile).status(201)
}

async function httpGetProfile(req, res){
  const userId = req.user.id
  const profile = await getProfile(userId)

  return res.json({profile}).status(200)
}

module.exports = {
  httpCreateProfile,
  httpGetProfile
}
