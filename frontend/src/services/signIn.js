import { backendAPI, setToken } from "services";

const signIn = async ({ email, password }, setIsLoggedIn) => {
  const user = { email, password }
  const { data: result } = await backendAPI.post('/auth/login', user);
  if (result.success) {
    setToken(`Bearer ${result.token}`)
    setIsLoggedIn(true)
    return result;
  }

  return result
}

export default signIn;
