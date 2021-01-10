import { Route, Switch} from 'react-router-dom';
import { Main, SignIn, SignUp,} from "pages"

const Router = () => (
  <Switch>
  <Route exact path="/" component={Main} />
  <Route path="/sign-in" component={SignIn} />
  <Route path="/sign-up" component={SignUp} />
</Switch>
);


export default Router;
