import Sequelize from 'sequelize';
import db from './db';

const Users = db.define('users',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: Sequelize.STRING(100),
  },
  {
    timestamps: false,
  });

export default Users;
