import { convertUnixToDate } from '@helpers';

const convertSupportedCurrenciesData = (data) => {
  const mappedData = data.map((obj) => ({ value: obj, title: obj.toUpperCase() }));
  return mappedData;
}

const convertCoinData = (data) => {
  const dataKeys = Object.keys(data)
  const newObj = {}
  dataKeys.map(dt =>
    newObj[dt] = data[dt].map(arr => ({
      time: convertUnixToDate(arr[0]),
      t: arr[0],
      value: arr[1].toFixed(2),
      y: arr[1].toFixed(2)
    }))
  )
  return newObj;
}

const convertCoinPairs = (data, vs_currency) => {
  const newData = data.filter(d => {
    d.pair = `${vs_currency}/${d.symbol}`;
    delete d.roi;
    delete d.last_updated;
    delete d.fully_diluted_valuation;
    return vs_currency.toString() !== d.symbol.toString()
  })

  Object.keys(newData[0]).map(k => newData.map(d => d[k] === null ? d[k] = 0 : d[k]));

  return { pairs: newData, length: data.length, currency: vs_currency }
}

const CoinUtils = {
  convertCoinData,
  convertCoinPairs,
  convertSupportedCurrenciesData,
}
export default CoinUtils
