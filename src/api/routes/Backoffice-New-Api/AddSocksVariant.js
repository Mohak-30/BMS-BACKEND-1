const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   

    var socksid = request.body.socksid;
    var name = request.body.name;
    var colorid = request.body.colorid;
    var sizeid = request.body.sizeid;
    var length = request.body.length;
    var breadth = request.body.breadth;
    var height = request.body.height;
    var volunit = request.body.volunit;
    var volweight = request.body.volweight;
    var packunit = request.body.packunit;
    var packweight = request.body.packweight;
    var price = request.body.price;
    var discountpercent = request.body.discountpercent;
    var discountprice = request.body.discountprice;
    var titlebar = request.body.titlebar;
    var metadescription = request.body.metadescription;
    var keywords = request.body.keywords;
    var availability = request.body.availability;
    var approved = request.body.approved;
    var showonwebsite = request.body.showonwebsite;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;




    try{
        const req = new sql.Request(dbConnection);
    
        req.input('socksid',sql.Int, socksid);
        req.input('name',sql.NVarChar(200), name);
        req.input('colorid',sql.Int, colorid);
        req.input('sizeid',sql.Int, sizeid);
        req.input('length',sql.Decimal(18,2), length);
        req.input('breadth',sql.Decimal(18,2), breadth);
        req.input('height',sql.Decimal(18,2), height);
        req.input('volunit',sql.NVarChar(10), volunit);
        req.input('volweight',sql.Decimal(18,2), volweight);
        req.input('packunit',sql.NVarChar(10), packunit);
        req.input('packweight',sql.Decimal(18,2), packweight);
        req.input('price',sql.Decimal(18,2), price);
        req.input('discountpercent',sql.Decimal(18,2), discountpercent);
        req.input('discountprice',sql.Decimal(18,2), discountprice);
        req.input('titlebar',sql.NVarChar(60), titlebar);
        req.input('metadescription',sql.NVarChar(160), metadescription);
        req.input('keywords',sql.NVarChar(250), keywords);
        req.input('availability',sql.NVarChar(50), availability);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
       
    
        req.execute("dbo.Add_SocksVariant", function(err, data){
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