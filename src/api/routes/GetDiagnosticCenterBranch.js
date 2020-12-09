const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var lab_id = request.body.lab_id;

    try{
        const req = new sql.Request(dbConnection);

        req.input('lab_id',sql.Int, lab_id);


        req.execute("dbo.Get_DiagnosticCenterBranch", function(err, data){
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