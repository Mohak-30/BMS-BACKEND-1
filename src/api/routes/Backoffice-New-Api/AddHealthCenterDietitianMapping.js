const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var dietitianid = request.body.dietitianid;
    var healthcenterid = request.body.healthcenterid;
    var day = request.body.day;
    var openingtime = request.body.openingtime;
    var openingtime2 = request.body.openingtime2;
    var closingtime = request.body.closingtime;
    var closingtime2 = request.body.closingtime2;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;




    try{
        const req = new sql.Request(dbConnection);

        req.input('dietitianid',sql.Int, dietitianid);
        req.input('healthcenterid',sql.Int, healthcenterid);
        req.input('day',sql.NVarChar(50), day);
        req.input('openingtime',sql.NVarChar(100), openingtime);
        req.input('openingtime2',sql.NVarChar(100), openingtime2);
        req.input('closingtime',sql.NVarChar(100), closingtime);
        req.input('closingtime2',sql.NVarChar(100), closingtime2);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_HealthCenterDietitianMapping", function(err, data){
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