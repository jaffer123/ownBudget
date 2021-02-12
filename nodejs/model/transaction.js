var db = require('../config/db');
var Sequelize = require('sequelize');
module.exports= db.define('transaction',{
    id:{
        type: Sequelize.STRING,
        primaryKey:true,
    },
    user_id:{
        type: Sequelize.STRING,
    },
    sourcename:{
        type: Sequelize.STRING,
    },
    type:{
        type: Sequelize.STRING,
    },
    amount:{
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    transaction_at:{
        type: Sequelize.STRING,
    },
});

