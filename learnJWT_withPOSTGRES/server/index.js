/* for passwords npm install jsonwebtoken bcrypt uuid
    for email service npm install nodemailer
    for validation npm install express-validator
*/


import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import UserModel from './models/user.model.js';
import TokenModel from './models/token.model.js';
import {router} from './router/index.js';
import { sequelize } from './db.js';
import { error } from './middlewares/error-middleware.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(error);

const start = async () => {
  try {
    await sequelize.authenticate();
    await UserModel.sync();
    await TokenModel.sync();

    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }

  try {
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}...`))
  } catch(e) {
    console.log(e);
  }
};

start();