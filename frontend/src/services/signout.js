import { deleteToken } from "services"

const signout = (setIsLoggedIn) => {
  setIsLoggedIn(false)
  deleteToken()
};

export default signout;