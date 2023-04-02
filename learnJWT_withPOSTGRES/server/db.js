import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize('jwt', 'postgres', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})
  