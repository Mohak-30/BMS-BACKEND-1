const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var returndid = request.body.returndid;
    var orderdetailid = request.body.orderdetailid;
    var orderid = request.body.orderid;
    var status = request.body.status;

    // console.log(request.body)


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('returndid',sql.Int, returndid);
        req.input('orderdetailid',sql.Int, orderdetailid);
        req.input('orderid',sql.Int, orderid);
        req.input('status',sql.NVarChar(200), status);
       
       
   
    
        req.execute("dbo.Update_RefundStatus", function(err, data){
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