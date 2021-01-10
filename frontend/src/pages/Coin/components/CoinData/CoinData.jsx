import { useContext } from "react"
import { Typography, Box } from "@material-ui/core";
import { AuthenticationContext } from 'contexts';

import { coinData } from "./constants"
import { useStyles } from './styles';

const CoinData = ({ data }) => {
  const classes = useStyles();
  const { isLoggedIn } = useContext(AuthenticationContext);

  const subtitle = "subtitle2";
  const body = "body2"
  return (
    <Box className={classes.root} container>
      {
        coinData(data, classes, isLoggedIn).map(cd => (
          <Box key={cd.name} className={classes}>
            <Typography variant={body} className={classes.typo}>
              {cd.name}
            </Typography>
            <Typography variant={subtitle} className={[cd?.className, classes.typo]}>
              {cd.value}
            </Typography>
          </Box>
        ))
      }
    </Box >
  );
};

export default CoinData;