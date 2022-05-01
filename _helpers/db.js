const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // Génération de la base de données et / ou connexion
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // Laison base de données
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // Initialisation des données
    db.User = require('../users/user.model')(sequelize);

    // Synchronisation des données
    await sequelize.sync();
}