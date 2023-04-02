import { DataTypes, Model, Sequelize} from 'sequelize'
import dotenv from "dotenv";
import User from './user.model.js';
dotenv.config();
import { sequelize } from '../db.js';

// const sequelize = new Sequelize('jwt', 'postgres', process.env.PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'
//   })

export default class TokenModel extends Model {}

TokenModel.init(
  {
    // Здесь определяются атрибуты модели
    user: {
      type: DataTypes.INTEGER,
      references: {
        model: User
    }
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Здесь определяются другие настройки модели
    sequelize, // Экземпляр подключения (обязательно)
    modelName: 'TokenModel', // Название модели (обязательно)
    tableName: 'tokens',
  }
)