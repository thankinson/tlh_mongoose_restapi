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

const dbSync = async () =>{
    await Movie.sync();
}
dbSync();

module.exports =  Movie ;
