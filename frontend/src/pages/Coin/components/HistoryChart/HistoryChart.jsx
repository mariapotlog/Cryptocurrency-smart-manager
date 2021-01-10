import { useContext } from "react";
import { Box, Button } from '@material-ui/core';

import { AuthenticationContext } from 'contexts';

import {
  loggedInValues,
  notLoggedInValues,
} from "./constants"
import { useHistoryChart } from "./utils"

import { useStyles } from "./styles";

const HistoryChart = ({ data }) => {
  const classes = useStyles();
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { setTime, timeFormat, chartRef } = useHistoryChart(data)
  const buttonList = (!isLoggedIn ? notLoggedInValues : loggedInValues)
  return (
    <Box className={classes.root}>
      <Box className={classes.buttonBox}>
        {buttonList.map((btn) => (
          <>
            {
              <Button Button
                key={btn.value}
                size="small"
                variant="outlined"
                onClick={() => setTime(btn.value)}
                className={classes.button}
                disabled={btn.value === timeFormat}
              >
                {btn.value}
              </Button>

            }
          </>
        ))}
        <Box className={classes.canvas}>
          <canvas ref={chartRef} className={classes.canva} />
        </Box>
      </Box>
    </Box >
  );
};

export default HistoryChart;
