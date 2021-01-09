import jwt_decode from "jwt-decode";

export const AuthorizationToken = "jwt";

export const getToken = (name = AuthorizationToken) => {
  return localStorage.getItem(name)
}

export const setToken = (token) => localStorage.setItem(AuthorizationToken, token)

export const deleteToken = (token = AuthorizationToken) => localStorage.removeItem(token)

export const decodeToken = () => {
  const token = getToken();
  const decoded = jwt_decode(token.split(" ")[1]);
  return decoded;
}