var express = require('express');
var router = express.Router();
var signController = require('../controller/signController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',signController.signup);
router.post('/login',signController.login);
router.post('/logout',signController.logout);


module.exports = router;
