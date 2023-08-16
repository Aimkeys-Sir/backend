const express = require("express")
const {httpCreateProfile, httpGetProfile} = require("./profile.controller")

const profileRouter = express.Router()

profileRouter.post("/edit", httpCreateProfile)
profileRouter.get("/", httpGetProfile)

module.exports = profileRouter