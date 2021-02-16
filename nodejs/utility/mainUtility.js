var jwtToken =require('jsonwebtoken');

parseCookie = function(cookie) {
    console.log('parser maintain');
      var cookies = cookie.split(',')
      var cookies_obj  = {};
      for(var i = 0 ; i < cookies.length ; i++) {
        var key_val_pair = cookies[i].split("=")
        cookies_obj[key_val_pair[0]]=key_val_pair[1];
      }
      return cookies_obj; 
    }
decodeToken = async function(token,req,res) {
        jwtToken.verify(token, 'ownbudget-authkey', function(err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          return decoded;
        });
    }

  parseAuth = function(auth){
    console.log(parseAuth);
    let auth_token='';
    let auth_obj = auth.split(" ");
    auth_obj.map(dt=>{
      auth_token=dt;
    });
  return auth_token;
    }

module.exports={
    parseCookie,
    decodeToken,
    parseAuth,
}