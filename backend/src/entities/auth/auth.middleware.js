import { StatusCodes } from "@config"
import { AuthValidation } from "@auth"

const {
    validateRegisterInput,
    validateLoginInput
} = AuthValidation;
/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const validateInputs = (req, res, next) => {
    const { path } = req.route
    if (path === "/register") {
        const {
            isValid,
            errors
        } = validateRegisterInput(req.body)
        if (!isValid) {
            return res.status(StatusCodes.OK).json({ errors })
        }
    } else if (path === "/login") {
        const {
            isValid,
            errors
        } = validateLoginInput(req.body)
        if (!isValid) {
            return res.status(StatusCodes.OK).json({ errors })
        }
    }
    next()
}

const AuthMiddleware = {
    validateInputs,
}

export default AuthMiddleware