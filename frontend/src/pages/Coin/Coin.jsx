import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "@material-ui/core";

import { useMarket } from 'hooks';
import { LoadingSpinner } from 'components';

import { HistoryChart, CoinData } from "./components"

import { useStyles } from "./styles";

const Coin = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [customTime, setCustomTime] = useState();
  const {
    data,
    isLoading,
    isFetching,
  } = useMarket(id, { customTime });

  if (isLoading) return <LoadingSpinner />
  if (isFetching) return <LoadingSpinner />
  return (
    <Container maxWidth="xl" fixed className={classes.root}>
      <CoinData data={data.detail} setCustomTime={setCustomTime} />
      <HistoryChart data={data} />
    </Container>
  );
}

export default Coin;
