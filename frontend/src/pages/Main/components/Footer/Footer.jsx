import { Box, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useStyles } from "./styles"
import { CustomLink } from 'components';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CustomLink to="/markets" >
        <Box className={classes.middle}>
          <Typography variant={"body1"} className={classes.text}>
            View more cryptocurrencies
        </Typography>
          <ArrowForwardIosIcon fontSize="default" />
        </Box>
      </CustomLink>
    </Box>
  );
}

export default Footer;