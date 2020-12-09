const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../utilities/db");


router.get("/", function(request, response){
   

    try{
        const req = new sql.Request(dbConnection);
        req.execute("dbo.Get_Marketer", function(err, data){
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