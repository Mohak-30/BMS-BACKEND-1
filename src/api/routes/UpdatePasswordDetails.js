const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var user_id = request.body.user_id;
    var user_type = request.body.user_type;
    var password = request.body.password;
    var salt = request.body.salt;
    var username = request.body.username;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    var hashPassword = sha512(salt+password);

    // console.log(hashPassword)

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('user_id',sql.Int, user_id);
        req.input('user_type',sql.NVarChar(100), user_type);
        req.input('password',sql.NVarChar(500), hashPassword);
        req.input('username',sql.NVarChar(100), username);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
    
        req.execute("dbo.Update_PasswordDetails", function(err, data){
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