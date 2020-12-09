const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){

var name = request.body.name;
    var email = request.body.email;
    var mobile= request.body.mobile;
    var password= request.body.password;
    var gender = request.body.gender;
    var dob = request.body.dob;
    var age = request.body.age;
    var source = request.body.source;
    var totalsugarkubs = request.body.totalsugarkubs;
    var login_type = request.body.login_type;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;
    var email_verify = request.body.email_verify;
    var mobile_verify = request.body.mobile_verify;



try{
    const req = new sql.Request(dbConnection);
    
    req.input('name',sql.NVarChar(100), name);
    req.input('email',sql.NVarChar(100), email);
    req.input('mobile',sql.NVarChar(15), mobile);
    req.input('gender',sql.NVarChar(10), gender);
    req.input('dob',sql.NVarChar(200), dob);
    req.input('age',sql.NVarChar(10), age);
    req.input('source',sql.NVarChar(100), source);
    req.input('totalsugarkubs',sql.Int, totalsugarkubs);
    req.input('login_type',sql.NVarChar(100), login_type);
    req.input('updated_on',sql.NVarChar(200), updated_on);
    req.input('updated_by',sql.Int, updated_by);
    req.input('email_verify',sql.NVarChar(10), email_verify);
    req.input('mobile_verify',sql.NVarChar(10), mobile_verify);
    
    
    req.execute("dbo.Register_Customer", function(err, data){
    if(err){
    console.log("Error while executing the SP - [error] " + err);
    response.status(404).json({
    data:err.message
    });
    }else{
    
    if(login_type == 'Manual'){
    
    var hashPassword = sha512(data.recordset[0].Salt+password);
    
    const req2 = new sql.Request(dbConnection);
    
    req2.input('user_id',sql.Int, data.recordset[0].UserId);
    req2.input('email',sql.NVarChar(100), email);
req2.input('password',sql.NVarChar(500), hashPassword);

req2.execute("dbo.Update_CustomerPasswordDetails", function(err2, data2){
if(err2){
console.log("Error while executing the SP - [error] " + err2);
response.status(404).json({
data2:err2.message
});
}else{


response.status(200).json({
data: data.recordset
});
}
})
}else{
response.status(200).json({
data: data.recordset
});
}

}
});

}catch (err){
response.status(500);
response.send(err.message);
}


});

module.exports = router;
