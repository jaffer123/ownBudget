var jwtToken =require('jsonwebtoken');
var mainUtility =require('../utility/mainUtility');
exports.setjwt = async function(data){
  const token =await jwtToken.sign({data},'ownbudget-authkey');
  // res.cookie("auth_token", token, {maxAge:900000,httpOnly: true});
  return token;
}

exports.jwtMiddleware = function(req,res,next){
  var auth_token = ''; 
 // console.log(req.headers.authorization);
  if(req.headers.authorization){
    // cookies_obj  = mainUtility.parseCookie(req.headers.cookie)
  auth_token = mainUtility.parseAuth(req.headers.authorization);  
  if(auth_token!=undefined)  {
    mainUtility.decodeToken(auth_token,req,res);
  }else {
    console.log("please login first or enter a valid token")
  }
  next();
  }else{
    res.status(500).send({ auth: false, message: 'please login first or enter a valid token' });
  }
}
