
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('frango_assado', 'frango_user', 'frango_password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
