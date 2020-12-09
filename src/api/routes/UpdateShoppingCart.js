const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var cart_id = request.body.cart_id;
    var number_of_items = request.body.number_of_items;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;




    try{
        const req = new sql.Request(dbConnection);
    

        req.input('cart_id',sql.Int, cart_id);
        req.input('number_of_items',sql.Int, number_of_items);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Update_ShoppingCart", function(err, data){
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