import { StatusCodes } from '@config';
import { CoinService } from "@coin"
import { winston } from '@helpers';

const {
  findCoinData,
  findCoinMarkets,
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
  getCoinData,
  getCoinMarkets,
  getCoinPairs,
  getCoinPairsRandom,
}

export default CoinController;