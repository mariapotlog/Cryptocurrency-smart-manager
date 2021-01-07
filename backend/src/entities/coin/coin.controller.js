import { StatusCodes } from '@config';
import { CoinService } from "@coin"
import { winston } from '@helpers';

const {
  findCoinSimple,
  findSupportedCurrencies,
  findCoinData,
  findCoinCustomDateRange,
  findCoinMarkets,
  findCoinHistory,
  findCoinPairs,
  findCoinPairsRandom
} = CoinService

const getCoinData = async (req, res) => {
  try {
    const { id } = req.params;
    const { vs_currency, days, interval } = req.query;
    const result = await findCoinData(id, vs_currency, days, interval);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getCoinSimple = async (req, res) => {
  try {
    const { ids, vs_currencies } = req.query
    const result = await findCoinSimple(ids, vs_currencies);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getSupportedCurrencies = async (_req, res) => {
  try {
    const result = await findSupportedCurrencies();
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getCoinMarkets = async (req, res) => {
  try {
    const { ids, vs_currency, per_page, order, page, price_change_percentage } = req.query;
    const result = await findCoinMarkets(vs_currency, ids, per_page, order, page, price_change_percentage);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getCoinCustomDateRange = async (req, res) => {
  try {
    const { id } = req.params;
    const { vs_currency, from, to } = req.query;
    const result = await findCoinCustomDateRange(id, vs_currency, from, to);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getCoinPairs = async (req, res) => {
  try {
    const { vs_currency, page } = req.query;
    const result = await findCoinPairs(page, vs_currency);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}

const getCoinHistory = async (req, res) => {
  try {
    const { id } = req.params
    const { date } = req.query;
    const result = await findCoinHistory(id, date);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}


const getCoinPairsRandom = async (req, res) => {
  try {
    const { vs_currency, page } = req.query;
    const result = await findCoinPairsRandom(page, vs_currency);
    if (result.error) throw new Error(result.error)
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    winston.error(error.message)
    return res.status(StatusCodes.BadRequest).json({
      error: error.message,
    });
  }
}


const CoinController = {
  getCoinSimple,
  getSupportedCurrencies,
  getCoinData,
  getCoinCustomDateRange,
  getCoinMarkets,
  getCoinHistory,
  getCoinPairs,
  getCoinPairsRandom,
}

export default CoinController;