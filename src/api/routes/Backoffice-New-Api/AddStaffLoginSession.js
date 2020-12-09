const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var staffid= request.body.staffid;
    var action= request.body.action;
    var actiondate= request.body.actiondate;

    try{
        const req = new sql.Request(dbConnection);

        req.input('staffid',sql.Int, staffid);
        req.input('action',sql.NVarChar(10), action);
        req.input('actiondate',sql.NVarChar(100), actiondate);


        req.execute("dbo.Add_StaffLoginSession", function(err, data){
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