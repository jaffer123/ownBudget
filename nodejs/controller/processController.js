var Transaction =require('../model/transaction');
var Sequelize = require('sequelize');
const DATE_FORMATER = require('dateformat');
exports.reports =function(req,res){
        let user_id = req.body.user_id?req.body.user_id:1; 
        Transaction.findAll({where :{
                user_id:user_id,
        }})
        .then(data =>{
                res.json(data);
        })
        .catch(err =>console.log(err));
}

exports.income=function(req,res){ 
        let user_id = req.body.user_id?req.body.user_id:1;
     Transaction.create({
             user_id:user_id,
             sourcename:req.body.sourcename,
             amount:req.body.amount,
             type:req.body.type,
             description:req.body.description,
             transaction_at:DATE_FORMATER( new Date(),"yyyy-mm-dd HH:MM:ss" ),
     })      
     .then(data =>{
        res.json(data.dataValues);
      })
      .catch(err => console.log(err));
} 

exports.expenses=function(req,res){
        let user_id = req.body.user_id?req.body.user_id:1;
        Transaction.create({
                user_id:user_id,
                sourcename:req.body.sourcename,
                amount:req.body.amount,
                type:req.body.type,
                description:req.body.description,
                transaction_at:DATE_FORMATER( new Date(),"yyyy-mm-dd HH:MM:ss" ),
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
        let user_id = req.body.user_id?req.body.user_id:1;
        const totalAmount = await Transaction.findAll({
                attributes: [
                  'type',
                  [Sequelize.fn('sum', Sequelize.col('amount')), 'amount'],
                ],
                where :{
                        user_id:user_id,
                },
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