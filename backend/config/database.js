
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('frango_assado', 'frango_user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
