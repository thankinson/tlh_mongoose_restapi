const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

// this only needs to be used if there is no table in the db
// const dbSync = async () =>{
//     try {
//         await Movie.sync();
//     } catch (error) {
//         console.log(error)
//     }
// };
// dbSync();

module.exports =  Movie ;
