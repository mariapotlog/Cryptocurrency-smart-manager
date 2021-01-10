import { Grid, Typography, Box, Button } from '@material-ui/core';

import { CustomLink } from "components"

import { useStyles } from "./styles"

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Grid container className={classes.root}>
        {/* <Grid item xs={1} > */}
        {/* <CustomLink to="/markets/favorites"> */}
        {/* <Typography variant={"subtitle1"}> */}
        {/* <Button>Favorites</Button> */}
        {/* </Typography> */}
        {/* </CustomLink> */}
        {/* </Grid> */}
        <Grid item xs={1} >
          <CustomLink to="/markets">
            <Typography variant={"subtitle1"}>
              <Button>Markets</Button>
            </Typography>
          </CustomLink>
        </Grid>
        {/* <Grid item xs={1} > */}
        {/* <Typography variant={"subtitle1"}> <Button>Coins</Button></Typography> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}

export default Header;
