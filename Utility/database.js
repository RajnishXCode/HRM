const { Sequelize } = require("sequelize");

// Local Database rajnish
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "1234",
  database: "Test-HRM",
  logging: false, // Set to true to log queries
});

// function to establish the connection
async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: '<IP/URL>',
//   port: '5432',
//   username: 'postgres',
//   password: "<password>",
//   database: 'postgres'
// });

module.exports = { sequelize, connect };
