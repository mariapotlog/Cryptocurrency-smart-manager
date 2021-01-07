import express from "express";
import { Coin, Auth } from "@entities";

const router = express.Router();

router.use("/coin", Coin.router)
router.use("/auth", Auth.router)

export default router;