import Sequelize from 'sequelize';
import db from './db';

const GithubUsers = db.define('github_users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    token: Sequelize.STRING(100),
    githubID: {
      type: Sequelize.STRING(100),
      field: 'github_id',
    },
    name: Sequelize.STRING(100),
  },
  {
    timestamps: false,
  });

export default GithubUsers;
