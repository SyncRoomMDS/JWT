const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // Exclure le hash
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // Inclure le hash
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}