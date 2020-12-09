const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var salt_id = request.body.salt_id;
    var composition = request.body.composition;
    var division = request.body.division;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('salt_id',sql.Int, salt_id);
        req.input('composition',sql.NVarChar(200), composition);
        req.input('division',sql.NVarChar(100), division);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_SaltMaster", function(err, data){
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