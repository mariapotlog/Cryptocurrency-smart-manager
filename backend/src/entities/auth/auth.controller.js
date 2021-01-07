import { StatusCodes } from '@config';
import { AuthService } from "@auth";
import { winston } from "@helpers"

const { findUserByEmail, registerUser, loginUser } = AuthService

const Register = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    if (result.duplicate) {
      winston.error(result.duplicate)
      return res.status(StatusCodes.BadRequest).json({ error: result.error });
    }
    return res.status(StatusCodes.OK).json(result.user);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}
const Login = async (req, res) => {
  try {
    const result = await loginUser(req.body)
    if (result.error) {
      winston.error(result.error)
      return res.status(StatusCodes.Unauthorized).json({ error: result.error })
    }
    res.header("authorization", result.accessToken);
    return res
      .json({
        success: true,
        token: result.accessToken,
      });
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getUserDetails = async (_req, res) => {
  try {
    if (res.locals.payload) {
      const { email } = res.locals.payload;
      const result = await findUserByEmail(email)
      if (result.error) {
        winston.error(result.error)
        return res.status(StatusCodes.BadRequest).json({
          error: result.error,
        });
      }
      return res.status(StatusCodes.OK).json(result.user);
    }
    winston.error("User not found")
    return res.status(StatusCodes.NotFoundError).json({
      error: "User not found",
    });
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
};

const AuthController = {
  getUserDetails,
  Login,
  Register
}

export default AuthController;
