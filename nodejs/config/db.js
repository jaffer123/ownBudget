const Sequelize = require('sequelize');

const db = new Sequelize('ownbudget','root','password',{
    host:'localhost',
    dialect:'mysql',
    define:{
        "freezeTableName": true,
        "timestamps": false,
    },
    
})

module.exports =db;