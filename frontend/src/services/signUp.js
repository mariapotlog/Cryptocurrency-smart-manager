import { backendAPI } from "services"

const signUp = async ({
  email,
  firstName,
  lastName,
  password,
  confirmedPassword
}) => {
  try {
    const result = await backendAPI.post('/auth/register', {
      email,
      firstName,
      lastName,
      password,
      confirmedPassword
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export default signUp;
