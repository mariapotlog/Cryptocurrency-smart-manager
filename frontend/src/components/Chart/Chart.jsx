import { useEffect, useRef } from 'react';
import { useChartData } from 'hooks';
import Chartjs from "chart.js";

import { Box } from '@material-ui/core';

import { useStyles } from "./styles";

const Chart = ({ id }) => {
  const chartRef = useRef();
  const classes = useStyles();
  const {
    data,
    isLoading,
    isFetching,
  } = useChartData(id);

  useEffect(() => {
    if (chartRef?.current && data?.prices) {
      new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [{
            data: data.prices,
            backgroundColor: "rgba(61, 166, 0, 0.5)",
            borderColor: "rgba(255, 194, 0, 1)",
            pointRadius: 0,
            fill: false,
            borderWidth: 2
          }],
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
          },
          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [{
              type: "time",
              distribution: "linear",
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }]
          },
        },
      });
    }
  }, [data.prices]);

  if (isLoading) return <div>Is Loading...</div>
  if (isFetching) return <div>Is Fetching...</div>
  return (
    <div>
      <Box className={classes.canvas}>
        <canvas ref={chartRef} id={id} className={classes.canva} />
      </Box>
    </div>
  );
}

export default Chart;
