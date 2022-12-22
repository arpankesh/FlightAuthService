const express = require("express");
const UserController = require("../../controllers/user-controller.js");
const { AuthRequestValidtor } = require("../../middlewares/index.js");

const router = express.Router();

router.post(
    "/signup",
    AuthRequestValidtor.validateUserAuth,
    UserController.create
);
router.post(
    "/signin",
    AuthRequestValidtor.validateUserAuth,
    UserController.signIn
);

module.exports = router;