
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FrangoCru = sequelize.define('FrangoCru', {
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    origem: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = FrangoCru;
