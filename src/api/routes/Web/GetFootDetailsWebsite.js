const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db");


router.post("/", function(request, response){
   
    var foot_id = request.body.foot_id;

    try{
        const req = new sql.Request(dbConnection);

        req.input('foot_id',sql.Int, foot_id);


        req.execute("dbo.Get_FootDetailsWebsite", function(err, data){
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