const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var healthcenterid = request.body.healthcenterid;
    var day = request.body.day;
    var closingtime = request.body.closingtime;
    var openingtime = request.body.openingtime;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


   

    try{
        const req = new sql.Request(dbConnection);

        req.input('healthcenterid',sql.Int, healthcenterid);
        req.input('day',sql.NVarChar(100), day);
        req.input('closingtime',sql.NVarChar(100), closingtime);
        req.input('openingtime',sql.NVarChar(100), openingtime);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_HealthCenterTimingsMapping", function(err, data){
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