const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   

    var customerid = request.body.customerid;
    var status = request.body.status;
    var createdon = request.body.createdon;
    var createdby = request.body.createdby;



    try{
        const req = new sql.Request(dbConnection);
    
        req.input('customerid',sql.Int, customerid);
        req.input('status',sql.NVarChar(50), status);
        req.input('createdon',sql.NVarChar(200), createdon);
        req.input('createdby',sql.Int, createdby);
       
    
        req.execute("dbo.Add_TransactionLog", function(err, data){
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