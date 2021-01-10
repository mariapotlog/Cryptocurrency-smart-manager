import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthenticationContext } from 'contexts';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const comp = (props) => isLoggedIn ? <Component {...props} /> : <Redirect to={"/"} />
  return (
    <Route
      {...rest}
      exact
      render={(props) => comp(props)}
    />
  );
};

export default PrivateRoute;
