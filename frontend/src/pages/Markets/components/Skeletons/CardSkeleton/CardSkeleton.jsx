import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { useStyles } from "./styles"

const CardSkeleton = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h6">
          <Skeleton className={classes.skeleton} />
        </Typography>
        <Typography variant="body2" component="p">
          <Skeleton className={classes.skeleton} />
        </Typography>
        <Box >
          <Typography variant="body2">
            <Skeleton className={classes.skeleton} />
          </Typography>
        </Box>
        <Typography variant="body2" component="p">
          <Skeleton className={classes.skeleton} />
        </Typography>
      </Box>
    </Box>
  );
}

export default CardSkeleton;
