import express from "express";
import { Coin } from "@entities";

const router = express.Router();

router.use("/coin", Coin.router)

export default router;