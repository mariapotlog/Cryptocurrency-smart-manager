import { Route, Switch } from 'react-router-dom';

import { Main, SignIn, SignUp, Coin } from 'pages';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/coins/:id" component={Coin} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);


export default Router;
