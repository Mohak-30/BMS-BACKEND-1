const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   

    var id = request.body.id;
    var quantity = request.body.quantity;
    var url = request.body.url;


    try{
        const req = new sql.Request(dbConnection);


        req.input('id',sql.Int, id);
        req.input('quantity',sql.Int, quantity);
        req.input('url',sql.NVarChar(200), url);


        req.execute("dbo.Get_CartFoodVariantCookie", function(err, data){
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