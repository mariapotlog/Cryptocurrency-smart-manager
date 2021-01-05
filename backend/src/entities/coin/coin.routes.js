import express from "express"
import { CoinController } from "@coin";
import { asyncErrorHandler } from "@helpers"

const CoinRouter = express.Router()

CoinRouter.get("/coin-data/:id", asyncErrorHandler(CoinController.getCoinData))

CoinRouter.get("/markets", asyncErrorHandler(CoinController.getCoinMarkets))

CoinRouter.get("/pairs", asyncErrorHandler(CoinController.getCoinPairs))

CoinRouter.get("/pairs-random", asyncErrorHandler(CoinController.getCoinPairsRandom))

CoinRouter.get("/ping", (_req, res,) => res.json({ text: "noice from the coinRouter" }))

export default CoinRouter;
