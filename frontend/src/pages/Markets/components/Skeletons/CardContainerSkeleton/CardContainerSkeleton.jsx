import { Box } from '@material-ui/core';

import { CardSkeleton } from "../"

import { useStyles } from './styles'

const CardContainerSkeleton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {[1, 2, 3, 4].map(d => <CardSkeleton key={d} />)}
    </Box>
  );
}

export default CardContainerSkeleton;
