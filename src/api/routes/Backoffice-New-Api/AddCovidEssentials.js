const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var name = request.body.name;
    var brandid = request.body.brandid;
    var companyid = request.body.companyid;
    var manufacturerid = request.body.manufacturerid;
    var marketerid = request.body.marketerid;
    var categoryid = request.body.categoryid;
   
    var description = request.body.description;
    var keyingredients = request.body.keyingredients;
    var reutrnable = request.body.reutrnable;
    var returnabledays = request.body.returnabledays;
    var hsncode = request.body.hsncode;
    var gstpercent = request.body.gstpercent;
    var approved = request.body.approved;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
    var countryoforigin = request.body.countryoforigin;
   
    console.log(request.body)

    try{
        const req = new sql.Request(dbConnection);

        req.input('name',sql.NVarChar(200), name);
        req.input('brandid',sql.Int, brandid);
        req.input('companyid',sql.Int, companyid);
        req.input('manufacturerid',sql.Int, manufacturerid);
        req.input('marketerid',sql.Int, marketerid);
        req.input('categoryid',sql.Int, categoryid);
       
        req.input('description',sql.NVarChar, description);
        req.input('keyingredients',sql.NVarChar, keyingredients);
        req.input('returnabledays',sql.Int, returnabledays);
        req.input('reutrnable',sql.NVarChar(5), reutrnable);
        req.input('hsncode',sql.NVarChar(100), hsncode);
        req.input('gstpercent',sql.Decimal(18,2), gstpercent);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('countryoforigin',sql.NVarChar(100), countryoforigin);

        req.execute("dbo.Add_CovidEssentialsItemMaster", function(err, data){
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