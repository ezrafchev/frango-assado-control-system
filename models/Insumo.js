
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Insumo = sequelize.define('Insumo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
}, {
  tableName: 'insumos'
});

module.exports = Insumo;
