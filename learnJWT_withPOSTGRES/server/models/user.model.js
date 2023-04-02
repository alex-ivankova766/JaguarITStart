import { DataTypes, Model} from 'sequelize'
import dotenv from "dotenv";
dotenv.config();
import { sequelize } from '../db.js';

export default class UserModel extends Model {}

UserModel.init(
  {
    // Здесь определяются атрибуты модели
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    activationLink: {
        type: DataTypes.STRING,
    }
  },
  {
    // Здесь определяются другие настройки модели
    sequelize, // Экземпляр подключения (обязательно)
    modelName: 'UserModel', // Название модели (обязательно)
    tableName: 'users',
  }
)