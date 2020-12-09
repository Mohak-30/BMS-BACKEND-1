const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var name = request.body.name;
    var brandid = request.body.brandid;
    var companyid = request.body.companyid;
    var manufacturerid = request.body.manufacturerid;
    var marketerid = request.body.marketerid;
    var typeid = request.body.typeid;
    var gender = request.body.gender;
    var description = request.body.description;
    var reutrnable = request.body.reutrnable;
    var returnabledays = request.body.returnabledays;
    var hsncode = request.body.hsncode;
    var gstpercent = request.body.gstpercent;
    var approved = request.body.approved;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
    var countryoforigin = request.body.countryoforigin;
   


    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('name',sql.NVarChar(200), name);
        req.input('brandid',sql.Int, brandid);
        req.input('companyid',sql.Int, companyid);
        req.input('manufacturerid',sql.Int, manufacturerid);
        req.input('marketerid',sql.Int, marketerid);
        req.input('typeid',sql.Int, typeid);
        req.input('gender',sql.NVarChar(20), gender);
        req.input('description',sql.NVarChar, description);
        req.input('returnabledays',sql.Int, returnabledays);
        req.input('reutrnable',sql.NVarChar(5), reutrnable);
        req.input('hsncode',sql.NVarChar(100), hsncode);
        req.input('gstpercent',sql.Decimal(18,2), gstpercent);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('countryoforigin',sql.NVarChar(100), countryoforigin);


        req.execute("dbo.Update_FootwearItemMaster", function(err, data){
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