var jwtToken =require('jsonwebtoken');
var mainUtility =require('../utility/mainUtility');
exports.setjwt = async function(data,req,res){
  const token =await jwtToken.sign({data},'ownbudget-authkey');
  res.cookie("auth_token", token, {maxAge:900000,httpOnly: true});
  return token;
}

exports.jwtMiddleware = function(req,res){
  var auth_token = ''; 
  if(req.headers.authorization){
    // cookies_obj  = mainUtility.parseCookie(req.headers.cookie)
  auth_token = mainUtility.parseAuth(req.headers.authorization);  
  if(auth_token!=undefined)  {
    mainUtility.decodeToken(auth_token,req,res);
  }else {
    console.log("please login first or enter a valid token")
  }
  }else{
    res.status(500).send({ auth: false, message: 'please login first or enter a valid token' });
  }
}
