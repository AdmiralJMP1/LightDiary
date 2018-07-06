const config = require('../server_config');
const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD, 
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    operatorsAliases: false,
    ssl: true,
    dialectOptions: {
      ssl: true
  }
});

module.exports = db;
