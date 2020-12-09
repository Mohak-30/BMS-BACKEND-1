const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var email = request.body.email;
    var password = request.body.password;


    // console.log(request.body)

    
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('email',sql.NVarChar(100), email);
    
        req.execute("dbo.Vendor_Auth", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                var hashPassword = sha512(data.recordset[0].fld_salt+password);

                const req2 = new sql.Request(dbConnection);

                req2.input('email',sql.NVarChar(200), email);
                req2.input('password',sql.NVarChar(500), hashPassword);
 


                req2.execute("dbo.Vendor_Credentials_Auth", function(err2, data2){
                    if(err2){
                        console.log("Error while executing the SP - [error] " + err2);
                        response.status(404).json({
                            data:err2.message
                        });
                    }else{
                        // console.log(data2.recordset)
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