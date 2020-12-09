const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var user_email = request.body.user_email;
    var login_type = request.body.login_type;
    var last_action_date_time = request.body.last_action_date_time;

 

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('user_email',sql.NVarChar(100), user_email);
        req.input('login_type',sql.NVarChar(100), login_type);
        req.input('last_action_date_time',sql.NVarChar(200), last_action_date_time);
    
    
        req.execute("dbo.Add_UserLoginSession", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                response.status(200).json({
                    data: data.recordset
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;