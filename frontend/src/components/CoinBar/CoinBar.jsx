// import { useState } from "react"
import { useStyles } from './styles';

import { Grid, Typography, Box } from "@material-ui/core"
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
// import { Rating } from '@material-ui/lab';


import { CustomLink, Chart } from "components"
import { Capitalize, convertExponentialToDecimal } from "helpers"
// import { useCoinSave } from './utils';

const CoinBar = ({ coin, currency }) => {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = coin

  // const result = useCoinSave(id)

  // const [value, setValue] = useState(0);
  const classes = useStyles();
  const variant = "subtitle1";

  const priceChange = price_change_percentage_24h < 0 ? classes.priceDown : classes.priceUp;

  const pricePercentage = price_change_percentage_24h < 0
    ? <TrendingDownIcon className={classes.icon} />
    : <TrendingUpIcon className={classes.icon} />

  return (
    <Grid container className={classes.link}>
      {/* <Grid item xs={0} className={classes.star}>
        <Rating
          max={1}
          size="large"
          value={value}
          onClick={() => {
            console.log(id)
            result.mutate()
          }}
        />
      </Grid> */}
      <Grid item xs={12}>
        <CustomLink to={`/coins/${id}`}>
          <Grid container>
            <Grid item xs={4}>
              <Box className={classes.container}>
                <img className={classes.coinImage} src={image} />
                <Typography className={classes.symbol} variant={variant}>{Capitalize(symbol)}</Typography>
                <Typography className={classes.name} variant={variant}>{name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.lastPrice}>
              <Typography variant={variant}>{convertExponentialToDecimal(Math.abs(current_price.toFixed(8)))} {currency.toUpperCase()}</Typography>
            </Grid>
            <Grid item xs={0} className={classes.daily}>
              <Box className={classes.percentage}>
                <Typography className={priceChange} variant={variant}>
                  {Math.abs(price_change_percentage_24h).toFixed(2)}%
              </Typography>
                <Typography className={priceChange} variant={variant}>
                  {pricePercentage}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} className={classes.chart}>
              <Chart id={id} />
            </Grid>
          </Grid>
        </CustomLink>
      </Grid>
    </Grid >
  );
};

export default CoinBar;
