require("dotenv").config();
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI);

// const initialize = async () => {
//     process.env.MYSQL_URI = config.database;
//     const connection = await mysql.createConnection(process.env.MYSQL_URI);
//     await connection.query(`Create database if none exist \`${database}\`;`);

//     exports.sequelize = new Sequelize(process.env.MYSQL_URI);

//     await sequelize.sync()

// }

// initialize();


// this is my database connection file. it connects to a MySql database
