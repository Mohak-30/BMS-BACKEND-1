const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var emp_id = request.body.emp_id;
    var user_type = request.body.user_type;
    var username = request.body.username;
    var password= request.body.password;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;
 

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('emp_id',sql.Int, emp_id);
        req.input('user_type',sql.NVarChar(100), user_type);
        req.input('username',sql.NVarChar(100), username);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
    
        req.execute("dbo.Add_LoginDetails", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                const req2 = new sql.Request(dbConnection);

                var hashPassword = sha512(data.recordset[0].Salt+password);



req2.input('user_id',sql.Int, data.recordset[0].UserId);
req2.input('user_type',sql.NVarChar(100), user_type);
req2.input('username',sql.NVarChar(100), username);
req2.input('password',sql.NVarChar(500), hashPassword);
req2.input('updated_on',sql.NVarChar(200), updated_on);
req2.input('updated_by',sql.Int, updated_by);


req2.execute("dbo.Update_PasswordDetails", function(err2, data2){
    if(err2){
        console.log("Error while executing the SP - [error] " + err2);
        response.status(404).json({
            data:err2.message
        });
    }else{

                response.status(200).json({
                    data: data2.recordset
                });
            }
        })
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;