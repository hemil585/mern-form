const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router.post("/", userController.createUser);
exports.router = router;
