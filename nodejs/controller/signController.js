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
    let data = await admin.findOne({where:{'email_id':req.body.email_id,'password':req.body.password}});
    if(data!==null){
    let token= await jwt.setjwt(data,req,res); 
    let json ={ 'data':data,
                'token':token,};    
    res.json(json);
    }else{
    res.status(500).json("login-failed"); 
    }  
}

exports.logout =function(req,res){

  res.json("logout");
}