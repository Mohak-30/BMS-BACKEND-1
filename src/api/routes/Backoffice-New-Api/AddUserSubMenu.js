const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var submenuid = request.body.submenuid;
    var staffid = request.body.staffid;
    var show = request.body.show;
    var access = request.body.access;

    try{
        const req = new sql.Request(dbConnection);

        req.input('submenuid',sql.Int, submenuid);
        req.input('staffid',sql.Int, staffid);
        req.input('show',sql.Int, show);
        req.input('access',sql.Int, access);


        req.execute("dbo.Add_UserSubMenu", function(err, data){
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