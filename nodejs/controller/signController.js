const admin = require('../model/admin');

exports.signup = function(req,res){  
      admin.create(req.body)
      .then(data =>{
        res.json(data.dataValues);
      })
      .catch(err => console.log(err));
}
 
exports.login = function(req,res){

    admin.findOne({where:req.body})
    .then(data =>{
      res.json(data.dataValues);
    })
    .catch(err => console.log(err));
}