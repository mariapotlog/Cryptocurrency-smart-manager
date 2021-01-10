import { Box, Grid, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useStyles } from "./styles"

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid xs="12" className={classes.middle}>
      <Box className={classes.root}>
        <Button>
          <Typography variant={"body1"} className={classes.text}>
            Load More
          </Typography>
          <ArrowForwardIosIcon fontSize="default" />
        </Button>
      </Box>
    </Grid >
  );
}

export default Footer;