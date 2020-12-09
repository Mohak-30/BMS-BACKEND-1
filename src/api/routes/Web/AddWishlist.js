const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db");


router.post("/", function(request, response){
   
    var customer_id = request.body.customer_id;
    var product_id = request.body.product_id;
    var product_category = request.body.product_category;
    var value = request.body.value;
    var number_of_items = request.body.number_of_items;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;




    try{
        const req = new sql.Request(dbConnection);
    

        req.input('customer_id',sql.Int, customer_id);
        req.input('product_id',sql.Int, product_id);
        req.input('product_category',sql.NVarChar(200), product_category);
        req.input('value',sql.Decimal(18,2), value);
        req.input('number_of_items',sql.Int, number_of_items);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Add_Wishlist", function(err, data){
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