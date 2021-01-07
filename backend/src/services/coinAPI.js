import axios from "axios";
// import { Constants } from "@config"

const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

const getSimpleCoin = async (ids, vs_currencies) => {
  const { data } = await API.get(`/simple/price/`, {
    params: {
      vs_currencies,
      ids,
      include_market_cap: true,
      include_24hr_vol: true,
      include_24hr_change: true,
      include_last_updated_at: true
    },
  })
  return data;
}

const supportedCurrencies = async () => {
  const { data } = await API.get(`/simple/supported_vs_currencies`)
  return data;
}

const getCoinDay = async (id, vs_currency) => {
  const { data } = await API.get(`/coins/${id}/market_chart/`, {
    params: {
      vs_currency,
      days: "1",
      interval: "daily"
    },
  })
  return data;
}

const getCoinWeek = async (id, vs_currency) => {
  const { data } = await API.get(`/coins/${id}/market_chart/`, {
    params: {
      vs_currency,
      days: "7",
    },
  })
  return data;
}

const getCoinYear = async (id, vs_currency) => {
  const { data } = await API.get(`/coins/${id}/market_chart/`, {
    params: {
      vs_currency,
      days: "365",
    },
  })
  return data;
}

const getCoinCustomTime = async (id, vs_currency, days, interval) => {
  console
  const { data } = await API.get(`/coins/${id}/market_chart/`, {
    params: {
      vs_currency,
      days,
      interval
    },
  })
  return data;
}

const getCoinCustomDateRange = async (
  id,
  vs_currency,
  days,
  from = "1392595200",
  to = (Date.now() / 1000).toFixed(0)
) => {
  const result = await API.get(`/coins/${id}/market_chart/range`, {
    params: {
      vs_currency,
      days,
      from,
      to
    },
  })
  return result.data;
}

const getMarkets = async (
  vs_currency,
  page = 1,
  ids,
  per_page = 20,
  order,
  price_change_percentage
) => {
  const result = await API.get("/coins/markets", {
    params: {
      ids,
      vs_currency,
      order,
      price_change_percentage,
      per_page,
      page
    },
  });
  return result.data;
}

const getHistoricData = async (id, date) => {
  const { data } = await API.get(`/coins/${id}/history`, {
    params: {
      id,
      date,
      localization: false
    },
  })
  return data;
}

const getCoinPairs = async (id, page = 1) => {
  const { data } = await API.get(`/coins/${id}/tickers`, {
    params: {
      id,
      exchange_ids: "binance",
      page,
    },
  })
  return data;
}

const coinAPI = {
  getSimpleCoin,
  supportedCurrencies,
  getCoinDay,
  getCoinWeek,
  getCoinYear,
  getCoinCustomTime,
  getCoinCustomDateRange,
  getMarkets,
  getHistoricData,
  getCoinPairs,
}

export default coinAPI;