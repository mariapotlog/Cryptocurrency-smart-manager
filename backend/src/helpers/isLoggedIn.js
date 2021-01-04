import jwt from 'jsonwebtoken';
import { StatusCodes, Constants } from '@config';


const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]
    if (!token) {
      return res.status(StatusCodes.BadRequest).json({
        error: "Not authorized"
      })
    }
    const decoded = jwt.verify(token, Constants.secretOrKey);
    res.locals.payload = decoded
  } catch (error) {
    return res.status(StatusCodes.BadRequest).json({
      error: error.message
    })
  }
  next()
}

export default isLoggedIn;
