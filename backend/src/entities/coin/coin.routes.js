import express from "express"
import { CoinController } from "@coin";
import { asyncErrorHandler } from "@helpers"

const CoinRouter = express.Router()

CoinRouter.get('/simple', asyncErrorHandler(CoinController.getCoinSimple))

CoinRouter.get('/supported-currencies', asyncErrorHandler(CoinController.getSupportedCurrencies))

CoinRouter.get("/coin-data/:id", asyncErrorHandler(CoinController.getCoinData))

CoinRouter.get("/coin-data/custom/:id", asyncErrorHandler(CoinController.getCoinCustomDateRange))

CoinRouter.get("/markets", asyncErrorHandler(CoinController.getCoinMarkets))

CoinRouter.get("/pairs", asyncErrorHandler(CoinController.getCoinPairs))

CoinRouter.get("/pairs-random", asyncErrorHandler(CoinController.getCoinPairsRandom))

CoinRouter.get("/history/:id", asyncErrorHandler(CoinController.getCoinHistory))

CoinRouter.get("/ping", (_req, res,) => res.json({ text: "noice from the coinRouter" }))

export default CoinRouter;
