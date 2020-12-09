const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var customer_id = request.body.customer_id;
    var variant_id = request.body.variant_id;
    var product_category = request.body.product_category;
    var quantity = request.body.quantity;
    var amount = request.body.amount;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;
    var url = request.body.url;


    try{
        const req = new sql.Request(dbConnection);

        req.input('customer_id',sql.Int, customer_id);
        req.input('variant_id',sql.Int, variant_id);
        req.input('product_category',sql.NVarChar(200), product_category);
        req.input('quantity',sql.Int, quantity);
        req.input('amount',sql.Decimal(18,2), amount);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
        req.input('url',sql.NVarChar(200), url);


        req.execute("dbo.Add_ShoppingCart", function(err, data){
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