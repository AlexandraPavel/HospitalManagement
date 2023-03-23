const express = require("express");
const {authentificateAccount, getHome} = require("../controllers/account.js");
const authRouter = express.Router();

authRouter.post("/login", authentificateAccount);
authRouter.get("/home", getHome);

module.exports = authRouter;
