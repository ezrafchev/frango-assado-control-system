
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Insumo = sequelize.define('Insumo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Insumo;
