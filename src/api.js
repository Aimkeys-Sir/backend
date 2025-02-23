const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const usersRouter = require("./routes/users/user.routes")
const authRouter = require("./routes/auth/auth.routes")

const verifyToken = require("./middleware/verify")
const profileRouter = require("./routes/profile/profile.routes")

const api = express()

api.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"]
  })
)

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}))

api.use("/users", verifyToken, usersRouter)
api.use("/auth", authRouter)
api.use("/profile", verifyToken, profileRouter)

module.exports = api