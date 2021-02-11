var Sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define('admin',{
    id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    firstname:{
        type: Sequelize.STRING,
    },
    lastname:{
        type: Sequelize.STRING,
    },
    email_id:{
        type: Sequelize.STRING,
    },
    phone_no:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
    },
    created_at:{
        type: Sequelize.STRING,
    },
    updated_at:{
        type: Sequelize.STRING,
    },
});