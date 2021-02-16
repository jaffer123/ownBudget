var Transaction =require('../model/transaction');
var Sequelize = require('sequelize');

exports.reports =function(req,res){

        Transaction.findAll()
        .then(data =>{
                res.json(data);
        })
        .catch(err =>console.log(err));
}

exports.income=function(req,res){ 
     Transaction.create({
             user_id:'1',
             sourcename:req.body.sourcename,
             amount:req.body.amount,
             type:req.body.type,
             description:req.body.description,
     })      
     .then(data =>{
        res.json(data.dataValues);
      })
      .catch(err => console.log(err));
} 

exports.expenses=function(req,res){
        Transaction.create({
                user_id:'1',
                sourcename:req.body.sourcename,
                amount:req.body.amount,
                type:req.body.type,
                description:req.body.description,
        })      
        .then(data =>{
           res.json(data.dataValues);
         })
         .catch(err => console.log(err));
         
}

exports.calculate=async function(req,res){
        var income = 0;
        var expenses =0;
        var balance =0;
        const totalAmount = await Transaction.findAll({
                attributes: [
                  'type',
                  [Sequelize.fn('sum', Sequelize.col('amount')), 'amount'],
                ],
                group: ['type'],
              });
              totalAmount.map(dt =>{
                if(dt.type==1){
                    income=dt.amount;
                }
                if(dt.type==2){
                    expenses=dt.amount;
                }
              });

              balance=income-expenses;
              
              res.json({'income':income,'expenses':expenses,'balance':balance});
}