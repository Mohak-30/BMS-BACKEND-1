const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var mobile = request.body.mobile;

console.log(request.body)

    
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('mobile',sql.NVarChar(15), mobile);
    
        req.execute("dbo.Customer_AuthMobile", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                        // console.log(data2.recordset)
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