const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var brand_name = request.body.brand_name;
    var brand_logo= request.body.brand_logo;
    var pharma_company= request.body.pharma_company;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('brand_name',sql.NVarChar(200), brand_name);
        req.input('brand_logo',sql.NVarChar(200), brand_logo);
        req.input('pharma_company',sql.NVarChar(200), pharma_company);
        req.input('status',sql.NVarChar(10), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_Brand", function(err, data){
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