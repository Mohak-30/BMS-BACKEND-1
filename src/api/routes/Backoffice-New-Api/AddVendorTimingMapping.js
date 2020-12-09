const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var vendorid = request.body.vendorid;
    var day = request.body.day;
    var openingtime = request.body.openingtime;
    var closingtime = request.body.closingtime;
    var openingtime1 = request.body.openingtime1;
    var closingtime1 = request.body.closingtime1;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('vendorid',sql.Int, vendorid);
        req.input('day',sql.NVarChar(100), day);
        req.input('openingtime',sql.NVarChar(100), openingtime);
        req.input('closingtime',sql.NVarChar(100), closingtime);
        req.input('openingtime1',sql.NVarChar(100), openingtime1);
        req.input('closingtime1',sql.NVarChar(100), closingtime1);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
    
        req.execute("dbo.Add_VendorTimingMapping", function(err, data){
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