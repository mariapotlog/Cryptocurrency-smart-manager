import { Typography, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './styles';

const CoinSkeleton = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} >
        <Grid item className={classes.image}>
          <Typography variant={"subtitle1"}>
            <Skeleton />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default CoinSkeleton;
