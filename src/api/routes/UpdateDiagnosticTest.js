const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var test_id = request.body.test_id;
    var test_code = request.body.test_code;
    var test_name= request.body.test_name;
    var alternate_name= request.body.alternate_name;
    var samples= request.body.samples;
    var preparation= request.body.preparation;
    var overview= request.body.overview;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('test_id',sql.Int, test_id);
        req.input('test_code',sql.NVarChar(200), test_code);
        req.input('test_name',sql.NVarChar(200), test_name);
        req.input('alternate_name',sql.NVarChar(200), alternate_name);
        req.input('samples',sql.NVarChar, samples);
        req.input('preparation',sql.NVarChar,preparation);
        req.input('overview',sql.NVarChar,overview);
        req.input('status',sql.NVarChar(10), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_Diagnostic_Test", function(err, data){
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