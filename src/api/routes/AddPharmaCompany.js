const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var pharma_name = request.body.pharma_name;
    var pharma_logo= request.body.pharma_logo;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('pharma_name',sql.NVarChar(200), pharma_name);
        req.input('pharma_logo',sql.NVarChar(200), pharma_logo);
        req.input('status',sql.NVarChar(10), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_Pharma", function(err, data){
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