import { useState } from "react";
import { useHistory } from "react-router-dom";

import { signUp } from "services";

const useRegister = () => {
  const history = useHistory();
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const register = async () => {
    try {
      setIsLoading(true);
      const result = await signUp({
        email,
        firstName,
        lastName,
        password,
        confirmedPassword,
      });
      if (!Array.isArray(result.data?.errors)) {
        result.data.errors = [result.data.errors];
        setErrors(result.data.errors);
        setIsValid(false);
      }
      setErrors(result.data.errors);
      setIsValid(false);
      setIsLoading(false);
      if (result.ok) {
        setIsValid(true);
        history.push("/sign-in");
      }
    } catch (error) {
      setIsLoading(false);
      return console.log(error);
    }
  };

  return {
    register,
    validation: {
      isValid,
      setIsValid,
    },
    errors: {
      errors,
      setErrors,
    },
    loading: {
      isLoading,
      setIsLoading,
    },
    user: {
      email,
      setEmail,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      password,
      setPassword,
      confirmedPassword,
      setConfirmedPassword,
    },
  };
};

export default useRegister;
