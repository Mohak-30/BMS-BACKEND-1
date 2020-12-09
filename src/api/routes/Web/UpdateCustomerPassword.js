const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../utilities/db");


router.post("/", function(request, response){
   
    var email = request.body.email;
    var password = request.body.password;


    // var hashPassword = sha512(salt+password);

    // console.log(hashPassword)

    try{
        const req = new sql.Request(dbConnection);
    
    
        req.input('email',sql.NVarChar(100), email);
  
    
        req.execute("dbo.Get_Salt_Customer", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                var salt = data.recordset[0].fld_salt
                // console.log(salt)
                var hashPassword = sha512(salt+password);


                const req2 = new sql.Request(dbConnection);

    
                req2.input('email',sql.NVarChar(100), email);
                req2.input('password',sql.NVarChar(500), hashPassword);

                req2.execute("dbo.Update_PasswordDetails_Customer", function(err2, data2){
                    if(err){
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