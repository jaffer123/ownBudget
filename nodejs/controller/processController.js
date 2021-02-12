

exports.reports =function(req,res){
    res.send("reports")
}

exports.income=function(req,res){ 
        res.send(req.body);
}

exports.expenses=function(req,res){
        res.send(req.body);
}