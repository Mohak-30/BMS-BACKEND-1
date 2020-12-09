const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   

    var socksvariantid = request.body.socksvariantid;
    var vendorid = request.body.vendorid;
    var sku = request.body.sku;
    var marginon = request.body.marginon;
    var vendorselling = request.body.vendorselling;
    var margin = request.body.margin;
    var marginpercent = request.body.marginpercent;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
    var costprice = request.body.costprice;



    try{
        const req = new sql.Request(dbConnection);
    
        req.input('socksvariantid',sql.Int, socksvariantid);
        req.input('vendorid',sql.Int, vendorid);
        req.input('sku',sql.NVarChar(100), sku);
        req.input('marginon',sql.NVarChar(100), marginon);
        req.input('vendorselling',sql.Decimal(18,2), vendorselling);
        req.input('margin',sql.Decimal(18,2), margin);
        req.input('marginpercent',sql.Decimal(18,2), marginpercent);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('costprice',sql.Decimal(18,2),costprice);
    
        req.execute("dbo.Add_SocksVariantVendorPricing", function(err, data){
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