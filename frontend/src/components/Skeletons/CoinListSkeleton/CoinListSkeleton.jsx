import { Box } from '@material-ui/core';

import { CoinSkeleton } from "components"


import { useStyles } from "./styles"

const CoinListSkeleton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {[1, 2, 3, 4, 5, 6].map((coin) => <CoinSkeleton key={coin} />)}
    </Box>
  );
}

export default CoinListSkeleton;
