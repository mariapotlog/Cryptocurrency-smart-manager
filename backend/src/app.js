import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

if (app.get('env') == "development") {
  dotenv.config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

export default app;
