const Sequelize = require("sequelize").Sequelize;
const connection = new Sequelize(
  "test",
  "root",
  "password",
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    pool: {
      max: 200,
      min: 0,
      acquire: 60000,
      idle: 5000
    },
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
);

module.exports = connection;
