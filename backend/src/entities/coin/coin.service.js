import { coinAPI } from "@services"
import { shuffle } from "@helpers"
import { CoinUtils } from '@coin';

const findCoinData = async (id, vs_currency, days, interval) => {
  try {
    const data = await coinAPI.getCoinCustomTime(id, vs_currency, days, interval);
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
  findCoinData,
  findCoinMarkets,
  findCoinPairs,
  findCoinPairsRandom
}

export default CoinService;
