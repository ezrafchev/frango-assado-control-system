
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Financa = sequelize.define('Financa', {
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Financa;
