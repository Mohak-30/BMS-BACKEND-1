const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   

    var product_category = request.body.product_category;
    var customer_id = request.body.customer_id;


    try{
        const req = new sql.Request(dbConnection);


        req.input('product_category',sql.NVarChar(200), product_category);
        req.input('customer_id',sql.Int, customer_id);


        req.execute("dbo.Get_CartSocksVariant", function(err, data){
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