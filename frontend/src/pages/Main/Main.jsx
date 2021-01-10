import { useContext } from 'react';
import { Container, Typography } from "@material-ui/core";

import { AuthenticationContext } from 'contexts';

import { Header, Footer, CoinList } from "./components";
import { useStyles } from "./styles";

const Main = () => {
  const { isLoggedIn, user } = useContext(AuthenticationContext)
  const classes = useStyles();
  const fullName = `${user.firstName} ${user.lastName}`
  const greeting = !isLoggedIn ? "Top Coins" : `Welcome back ${fullName}, here are the top coins`
  return (
    <Container disableGutters className={classes.root}>
      <Typography align="center" variant="h5" className={classes.greeting}>
        {greeting}
      </Typography>
      <Header />
      <CoinList />
      {isLoggedIn && <Footer />}
    </Container >
  );
};

export default Main;
