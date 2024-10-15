
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venda = sequelize.define('Venda', {
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    plataforma: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Venda;
