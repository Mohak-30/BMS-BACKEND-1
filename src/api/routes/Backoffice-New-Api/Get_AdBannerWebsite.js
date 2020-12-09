const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var verticle = request.body.verticle;
    var type = request.body.type;

    try{
        const req = new sql.Request(dbConnection);


        req.input('verticle',sql.NVarChar(200), verticle);
        req.input('type',sql.NVarChar(100), type);
        
        req.execute("dbo.Get_AdBannerWebsite", function(err, data){
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