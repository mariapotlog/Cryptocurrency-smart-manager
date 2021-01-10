
import { useState, useRef, useEffect } from 'react';
import Chartjs from "chart.js";

import { historyOptions } from "config";

const useHistoryChart = (data) => {
  const chartRef = useRef();

  const {
    hour,
    day,
    week,
    month,
    quarter,
    year,
    allTime,
    detail
  } = data;

  const [timeFormat, setTimeFormat] = useState("all time");

  const setTime = (time) => setTimeFormat(time)

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "hour":
        return hour?.prices;
      case "24h":
        return day?.prices;
      case "7d":
        return week?.prices;
      case "30d":
        return month?.prices;
      case "90d":
        return quarter?.prices;
      case "1y":
        return year?.prices;
      case "all time":
        return allTime?.prices;
      default:
        return allTime?.prices;
    }
  };

  useEffect(() => {
    if (chartRef?.current && detail) {
      new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [{
            label: `${detail.name} price`,
            data: determineTimeFormat(),
            backgroundColor: "rgba(61, 166, 0, 0.5)",
            borderColor: "rgba(255, 194, 0, 1)",
            pointRadius: 0,
            fill: false,
            borderWidth: 2
          }],
        },
        options: {
          ...historyOptions
        },
      });
    }
  }, [timeFormat]);

  return { setTime, timeFormat, chartRef }
}

export default useHistoryChart;
