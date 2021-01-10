import { Container } from '@material-ui/core';

import { Route, Switch } from 'react-router-dom';

import { Header, CardContainer, CoinList } from './components';

import { useStyles } from "./styles";

const Markets = () => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.root}>
      <CardContainer />
      <Header />
      <Switch>
        <Route exact path="/markets" component={CoinList} />
      </Switch>
    </Container>
  );
}

export default Markets;
