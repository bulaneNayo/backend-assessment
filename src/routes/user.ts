import express from "express";
const router = express.Router();
const userAuth = require("../auth/signup");
const userLogin = require("../auth/login");

router.post("/", userAuth.createAccount);
router.post("/login", userLogin.login);

export default router;
