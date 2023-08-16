const profile = require("./profile.mongo")

async function createProfile(data, userId) {
  const newProfile = await profile.updateOne({ user: userId }, data, {
    upsert: true,
  })

  return newProfile
}

async function getProfile(userId) {
  const _profile = await profile.findOne({ user: userId })

  return _profile
}

module.exports = { createProfile, getProfile }
