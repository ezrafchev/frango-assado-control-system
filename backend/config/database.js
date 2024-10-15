
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('frango_assado', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
