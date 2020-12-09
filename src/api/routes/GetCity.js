const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var state_id = request.body.state_id;

    try{
        const req = new sql.Request(dbConnection);

        req.input('state_id',sql.Int, state_id);


        req.execute("dbo.Get_City", function(err, data){
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