const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");

// 회원가입
router.post("/", userController.createUser);

module.exports = router;
