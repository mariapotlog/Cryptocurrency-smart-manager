import { Container } from '@material-ui/core';
import { usePairsRandom } from 'hooks';
import { Card, CardContainerSkeleton } from "../";

import { useStyles } from "./style"

const CardContainer = () => {
  const classes = useStyles();
  const { coins, isLoading, isFetching } = usePairsRandom();

  if (isFetching) return <CardContainerSkeleton />
  if (isLoading) return <CardContainerSkeleton />
  return (
    <Container disableGutters className={classes.root} >
      { coins.pairs.slice(5, 9).map(d => <Card key={d.pair} data={d} currency={coins.currency} />)}
    </Container>
  );
}

export default CardContainer;
