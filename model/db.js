import Sequelize from 'sequelize';
import { config } from 'dotenv';

config();

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
  operatorsAliases: false,
  ssl: true,
  dialectOptions: {
    ssl: true,
  },
});

export default db;
