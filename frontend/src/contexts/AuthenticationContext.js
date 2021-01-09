import { createContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
  AuthorizationToken,
  getToken,
  setToken,
  deleteToken,
  decodeToken
} from "services"

export const AuthenticationContext = createContext();

export const AuthenticationProvider = (props) => {
  const history = useHistory()
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setTokenInState] = useState(() => {
    const exValue = getToken(AuthorizationToken);
    if (exValue) return exValue;
    return null
  });

  useEffect(() => {
    if (token) {
      setToken(token);
      const decoded = decodeToken(token);

      const { id, email, firstName, lastName, exp } = decoded
      setUser({ id, email, firstName, lastName });

      const currentTime = Date.now() / 1000;
      if (exp < currentTime) {
        setIsLoggedIn(false)
        setUser({})
        history.push('/sign-in')
      }
      setIsLoggedIn(true)
    } else {
      setTokenInState(null)
      setUser({})
    }
  }, [token, history, token, setTokenInState]);

  return (
    <AuthenticationContext.Provider value={{ token, setToken, setTokenInState, deleteToken, isLoggedIn, setIsLoggedIn, user, setUser }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};