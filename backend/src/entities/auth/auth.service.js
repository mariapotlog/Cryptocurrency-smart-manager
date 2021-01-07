import jwt from "jsonwebtoken";
import { hash, genSalt, compare } from "bcryptjs";
import { UserModel } from "@auth";
import { Constants } from "@config"

/**
 * Finds a user document by email 
 * @param {String} email 
 * @return {{}} Returns the document containing the doctor information
 */
const findUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return { error: "User not found", exists: false }
    return { user, exists: true }
  } catch (error) {
    return { error: error.message }
  }
}
/**
 * Updates a users information based on the user email and returns the updated information
 * @param {String} email 
 * @param {{}} UserData
 * @param {String} UserData.firstName 
 * @param {String} UserData.lastName
 * @return {{}} Returns the document containing updated information
 */
const updateUser = async (email, { firstName, lastName }) => {
  try {
    const user = await findUserByEmail(email);
    if (user.error) return { error: user.error }
    const updatedUser = {
      firstName: firstName ? firstName : user.firstName,
      lastName: lastName ? lastName : user.lastName,
    }
    const newUser = await UserModel.findOneAndUpdate(
      { email },
      updatedUser,
      { new: true }
    )
    return newUser
  } catch (error) {
    return { error: error.message }
  }
}
/**
 * Creates an account based on the users input (email, password, accountType, firstName, lastName)
 * @param {Object} UserData
 * @param {String} UserData.email 
 * @param {String} UserData.password 
 * @param {String} UserData.firstName 
 * @param {String} UserData.lastName 
 * @return {{}} Returns the newly created user
 */
const registerUser = async (UserData) => {
  try {
    const { email, password, firstName, lastName } = UserData;

    const user = await findUserByEmail(email);
    if (user.exists) return { duplicate: true, error: "Email already exists" };

    const salt = await genSalt(10);

    const newUser = new UserModel({
      email,
      password,
      firstName,
      lastName,
      salt,
    });

    const _hash = await hash(newUser.password, salt);
    newUser.password = _hash;
    const createdUser = await newUser.save();
    return { user: createdUser }
  } catch (error) {
    return { error: error.message }
  }
}
/**
 * Logges in a user based on the users input (email, password)
 * @param {Object} UserData
 * @param {String} UserData.email 
 * @param {String} UserData.password 
 * @return {Object} Returns the information about the logged in user
 */
const loginUser = async ({ email, password }) => {
  try {
    const { user } = await findUserByEmail(email)
    if (!user) return { error: "Email not found" };

    const isMatch = await compare(password, user.password);
    if (!isMatch) return { error: "Incorrect password" };

    const payload = {
      id: user._id,
      email: user.email,
    };
    const accessToken = jwt.sign(payload, Constants.secretOrKey, {
      expiresIn: "1h",
    });
    return { accessToken }
  } catch (error) {
    return { error: error.message }
  }
}

const AuthService = {
  findUserByEmail,
  registerUser,
  loginUser,
  updateUser,
}

export default AuthService;
