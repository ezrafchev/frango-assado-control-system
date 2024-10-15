
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FrangoCru = sequelize.define('FrangoCru', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
}, {
  tableName: 'frangos_crus'
});

module.exports = FrangoCru;
