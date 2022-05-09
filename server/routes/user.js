const express = require("express");
const UsersController = require("../controllers/user");
const usersRouter = express.Router();

usersRouter.post("/sign-up", UsersController.SignUp);
usersRouter.post("/log-in", UsersController.LogIn);
usersRouter.post("/log-out", UsersController.LogOut);


module.exports = usersRouter;
