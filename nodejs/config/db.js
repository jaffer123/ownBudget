const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME || 'ownbudget',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        "freezeTableName": true,
        "timestamps": false,
    },
})

module.exports = db;