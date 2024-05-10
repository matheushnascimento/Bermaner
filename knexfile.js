const path = require("path")

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'infra', 'database', 'data.db')
    },

    migrations: {
      directory: path.resolve(__dirname, 'infra', 'database','knex','migrations')
    },

    useNullAsDefault: true,
  },

  };
