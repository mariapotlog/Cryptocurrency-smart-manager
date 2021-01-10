import { Box } from '@material-ui/core';
import { CoinBar, CoinListSkeleton } from 'components';
import { usePairs } from 'hooks';

import { Footer } from "../"

import { useStyles } from "./styles";

const CoinList = () => {
  const classes = useStyles();
  const { coins, isLoading, isFetching } = usePairs();

  if (isFetching) return <CoinListSkeleton />
  if (isLoading) return <CoinListSkeleton />
  return (
    <Box className={classes.root}>
      {coins.pairs.map((coin) => <CoinBar key={coin.id} coin={coin} currency={coins.currency} />)}
      <Footer />
    </Box>
  );
}

export default CoinList;
