const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db/connection");

const Cast = sequelize.define("Cast", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Movies',
            key: 'id'
        }
    }
});

const dbSync = async () =>{
    try {
        await Cast.sync();
    } catch (error) {
        console.log(error);
    }
};
dbSync();

module.exports = Cast;