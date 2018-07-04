const Sequelize = require("sequelize");
const db = require("./db");

const Github_users = db.define('github_users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, references: {
        model: 'user',
        key: 'id'
      },
    },
    token: Sequelize.STRING(100),
    github_id: Sequelize.STRING(100),
    name: Sequelize.STRING(100),
  },
  {
    timestamps: false
  }
);

module.exports = Github_users;