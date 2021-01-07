import express from "express"
import { AuthController, AuthMiddleware } from "@auth";
import { asyncErrorHandler, isLoggedIn } from "@helpers"

const {
  validateInputs,
} = AuthMiddleware
const {
  getUserDetails,
  Login,
  Register,
} = AuthController

const AuthRouter = express.Router()

AuthRouter.get('/', isLoggedIn, asyncErrorHandler(getUserDetails))

AuthRouter.post('/login', validateInputs, asyncErrorHandler(Login))

AuthRouter.post("/register", validateInputs, asyncErrorHandler(Register))

AuthRouter.get("/ping", (_req, res,) => res.json({ text: "noice from the authRouter" }))

export default AuthRouter;