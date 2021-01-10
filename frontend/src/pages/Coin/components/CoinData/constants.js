import { numberFormatter } from "helpers"

export const coinData = (data, classes, isLoggedIn) => {
  const unloggedData = [
    {
      name: "Current Price",
      value: `${data.current_price ? data.current_price.toFixed(2) : 0} ${data.currency.toUpperCase()}`
    },
    {
      name: "Market Cap",
      value: `${numberFormatter(data.market_cap)} ${data.currency.toUpperCase()}`
    },
    {
      name: "Volume(24H)",
      value: `${numberFormatter(data.total_volume)} ${data.currency.toUpperCase()}`
    }
  ];

  const loggedInData = [
    ...unloggedData,
    {
      name: "24h Change",
      value: `${data.price_change_percentage_24h ? data.price_change_percentage_24h.toFixed(2) : 0} %`,
      className: data.price_change_24h < 0 ? classes.red : classes.green
    },
    {
      name: "High 24h",
      value: `${data.high_24h ? numberFormatter(data.high_24h) : 0} ${data.currency.toUpperCase()}`
    },
    {
      name: "Low 24h",
      value: `${data.low_24h ? numberFormatter(data.low_24h) : 0} ${data.currency.toUpperCase()}`
    },
    {
      name: "Circulating Supply",
      value: `${numberFormatter(data.circulating_supply)} ${data.currency.toUpperCase()}`
    },
    {
      name: "Total Supply",
      value: `${data.total_supply ? `${numberFormatter(data.total_supply)} pcs` : "Has no total supply"}`
    }
  ]
  return isLoggedIn ? loggedInData : unloggedData
};
