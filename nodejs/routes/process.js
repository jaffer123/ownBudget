var express = require('express');
var router = express.Router();

var processController =require('../controller/processController');

router.post('/income',processController.income);
router.post('/expense',processController.expenses);
router.get('/report',processController.reports);
router.get('/calculate',processController.calculate);
module.exports = router;