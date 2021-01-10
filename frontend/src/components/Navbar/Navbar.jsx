import { useContext } from 'react';
import { Typography, Box, Button } from '@material-ui/core';

import { AuthenticationContext } from 'contexts';
import { BitcoinLogo, CustomLink } from 'components';

import { CurrencyDropdown } from "./components"

import { useStyles } from "./styles";
import { signout } from 'services';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthenticationContext);
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <BitcoinLogo />
        <Typography className={classes.title} variant="h6">
          <CustomLink to="/" color="white"> Bitcoin Extreme </CustomLink>
        </Typography>
      </Box>
      <Box className={classes.account}>
        {!isLoggedIn
          ? <>
            <Typography className={classes.title} variant="subtitle1">
              <CustomLink to="/sign-in" color="white">Sign In</CustomLink>
            </Typography>
            <Typography className={classes.title} variant="subtitle1">
              <CustomLink to="/sign-up" color="white">Sign Up</CustomLink>
            </Typography>
          </>
          :
          <Button onClick={() => signout(setIsLoggedIn)}>
            <Typography className={classes.title} variant="subtitle1" as="button">
              Sign Out
            </Typography>
          </Button>
        }
        <CurrencyDropdown />
      </Box>
    </Box>
  )
};

export default Navbar;
