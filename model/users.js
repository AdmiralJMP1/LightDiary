const Sequelize = require("sequelize");
const db = require("./db");

const Users = db.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    username: Sequelize.STRING(100),
  },
  {
    timestamps: false
  }
);

module.exports = Users;