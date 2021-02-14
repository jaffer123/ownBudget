var jwtToken =require('jsonwebtoken');

exports.setjwt = async function(data,req,res){
  const token =await jwtToken.sign({data},'jaffersathik');
  res.cookie("auth_token", token, {maxAge:900000,httpOnly: true});
  return token;

}

exports.decodeToken = async function(token,req,res) {
  jwtToken.verify(token, 'jaffersathik', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.status(200).send(decoded);
  });
}