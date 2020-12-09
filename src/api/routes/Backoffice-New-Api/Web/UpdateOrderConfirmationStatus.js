const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var txnid = request.body.txnid;
    var paystatus = request.body.paystatus;
    var orderstatus = request.body.orderstatus;


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('txnid',sql.NVarChar(200), txnid);
        req.input('paystatus',sql.NVarChar(100), paystatus);
        req.input('orderstatus',sql.NVarChar(100), orderstatus);
       
    
        req.execute("dbo.Update_OrderConfirmationStatus", function(err, data){
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