import { Box } from '@material-ui/core';
import { CoinBar, CoinListSkeleton } from 'components';
import { useMarkets } from 'hooks';

import { useStyles } from "./styles";

const CoinList = () => {
  const classes = useStyles();

  const params = {
    per_page: 6,
  }
  const { coins, isLoading, isFetching } = useMarkets(params);

  if (isFetching) return <CoinListSkeleton />
  if (isLoading) return <CoinListSkeleton />
  return (
    <Box className={classes.root}>
      {coins.map((coin) => <CoinBar key={coin.id} coin={coin} currency={coin.currency} />)}
    </Box>
  );
}

export default CoinList;
