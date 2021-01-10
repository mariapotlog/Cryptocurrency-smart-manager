import { Box, CircularProgress } from '@material-ui/core';

import { useStyles } from "./styles"

const LoadingSpinner = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CircularProgress size={70} variant="indeterminate" disableShrink />
    </Box>
  );
}

export default LoadingSpinner;
