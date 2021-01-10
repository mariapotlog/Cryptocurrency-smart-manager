import { Typography, Box } from "@material-ui/core"

import { CustomLink } from 'components';
import { numberFormatter } from 'helpers';

import { useStyles } from "./style"

export default function CoinCard({ data, currency }) {
  const classes = useStyles();
  const {
    price_change_percentage_24h: _24h,
    current_price,
    pair,
    total_volume,
    id
  } = data;

  const priceChange = _24h < 0 ? classes.priceDown : classes.priceUp;

  return (
    <CustomLink to={`/coins/${id}`}>
      <Box className={classes.root}>
        <Box>
          <Typography gutterBottom variant="h6">
            {pair.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1">
            Price: {Math.abs(Number(current_price).toFixed(8))} {currency}
          </Typography>
          <Box className={classes.change}>
            <Typography className={classes.title} variant="subtitle2"> 24h:</Typography>
            <Typography className={priceChange} variant="subtitle2">{_24h.toFixed(2)} %</Typography>
          </Box>
          <Typography variant="subtitle2" component="p">
            Volume: {numberFormatter(Number(total_volume))} {currency}
          </Typography>
        </Box>
      </Box>
    </CustomLink >
  );
}