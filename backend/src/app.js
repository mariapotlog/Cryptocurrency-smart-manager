import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { ConnectDB } from "@config";
import { loggerMiddleware } from "@helpers";

import router from "./router";

const app = express();

if (app.get('env') == "development") {
  dotenv.config();
}

ConnectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(loggerMiddleware);
app.use("/api", router);

export default app;
