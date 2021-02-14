var Transaction =require('../model/transaction');

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