const admin = require('../model/admin');
const jwt = require('../middleware/jwt');
exports.signup = function(req,res){  
      admin.create(req.body)
      .then(data =>{
        res.json(data);
      })
      .catch(err => console.log(err));  
}
 
exports.login =async function(req,res){
    console.log("this is the req toekn");
    let data = await admin.findOne({where:req.body});
    let token= await jwt.setjwt(data,req,res);     
    res.json(token);  
}

exports.logout =function(req,res){

  res.json("logout");
}