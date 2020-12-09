const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var ordervendordetailid = request.body.ordervendordetailid;
    var productid = request.body.productid;

    try{
        const req = new sql.Request(dbConnection);

        req.input('ordervendordetailid',sql.Int, ordervendordetailid);
        req.input('productid',sql.Int, productid);

        req.execute("dbo.Get_FoodProductByOrderVendorDetailID", function(err, data){
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