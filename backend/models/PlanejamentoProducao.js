
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlanejamentoProducao = sequelize.define('PlanejamentoProducao', {
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantidade_frangos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tempo_preparo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tempo_assado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    insumos_utilizados: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = PlanejamentoProducao;
