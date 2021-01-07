import { coinAPI } from "@services"
import { shuffle } from "@helpers"
import { CoinUtils } from '@coin';

const findCoinSimple = async (ids, vs_currencies) => {
  try {
    const data = await coinAPI.getSimpleCoin(ids, vs_currencies)
    return data;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findSupportedCurrencies = async () => {
  try {
    const data = await coinAPI.supportedCurrencies();
    const mappedData = CoinUtils.convertSupportedCurrenciesData(data)
    return mappedData;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinData = async (id, vs_currency, days, interval) => {
  try {
    const data = await coinAPI.getCoinCustomTime(id, vs_currency, days, interval);
    const mappedData = CoinUtils.convertCoinData(data)
    return mappedData;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinCustomDateRange = async (id, vs_currency, from, to) => {
  try {
    const data = await coinAPI.getCoinCustomDateRange(id, vs_currency, from, to);
    const mappedData = CoinUtils.convertCoinData(data)
    return mappedData;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinMarkets = async (vs_currency, ids, per_page, order, page, price_change_percentage) => {
  try {
    const data = await coinAPI.getMarkets(vs_currency, page, ids, per_page, order, price_change_percentage);
    data.map(d => {
      d.currency = vs_currency
      d.pair = `${vs_currency}/${d.symbol}`
    });
    let newData;
    data.length === 1 ? newData = data[0] : newData = data;
    return newData
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinHistory = async (id, date) => {
  try {
    const data = await coinAPI.getHistoricData(id, date);
    delete data.developer_data
    delete data.community_data
    delete data.public_interest_stats
    return data
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinPairs = async (page, vs_currency = "btc") => {
  try {
    const data = await coinAPI.getMarkets(vs_currency, page);
    const mappedData = CoinUtils.convertCoinPairs(data, vs_currency);
    return mappedData;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const findCoinPairsRandom = async (page, vs_currency = "btc") => {
  try {
    const data = await coinAPI.getMarkets(vs_currency, page);
    const mappedData = CoinUtils.convertCoinPairs(data, vs_currency)
    shuffle(mappedData.pairs);
    return mappedData;
  } catch (error) {
    return { error: error.response.data.error }
  }
}

const CoinService = {
  findCoinSimple,
  findSupportedCurrencies,
  findCoinData,
  findCoinCustomDateRange,
  findCoinMarkets,
  findCoinHistory,
  findCoinPairs,
  findCoinPairsRandom
}

export default CoinService;
