import { Route, Switch } from 'react-router-dom';

import { Main, SignIn, SignUp, Coin, Markets } from 'pages';
import { PrivateRoute } from 'components';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/coins/:id" component={Coin} />
    <PrivateRoute path="/markets" component={Markets} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);


export default Router;
