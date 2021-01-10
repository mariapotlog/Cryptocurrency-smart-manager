import { Grid, Typography } from '@material-ui/core';

import { useStyles } from "./styles"

const Header = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.symbol}>
        <Typography variant={"subtitle1"}>Symbol</Typography>
      </Grid>
      <Grid item xs={6} className={classes.price} >
        <Typography variant={"subtitle1"}>Price</Typography>
      </Grid>
      <Grid item xs={1} className={classes.change} >
        <Typography variant={"subtitle1"}>24H Change</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
