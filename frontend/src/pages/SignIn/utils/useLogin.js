import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { signIn } from 'services';
import { AuthenticationContext } from 'contexts';

const useLogin = () => {
  const history = useHistory();
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthenticationContext);

  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      if (password && email) {
        const result = await signIn({ email, password }, setIsLoggedIn);

        if (!Array.isArray(result?.errors)) {
          result.errors = [result.errors]
          setErrors(result.errors)
          setIsValid(false)
        }

        setErrors(result.errors);
        setIsValid(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    if (isLoggedIn) history.push("/")
  }, [isLoggedIn, history]);

  return {
    login,
    validation: {
      isValid, setIsValid
    },
    errors: {
      errors, setErrors
    },
    loading: {
      isLoading, setIsLoading
    },
    user: {
      email, setEmail,
      password, setPassword,
    }
  }
}

export default useLogin;
