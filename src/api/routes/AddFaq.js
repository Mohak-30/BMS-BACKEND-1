const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");

router.post("/", function(request, response){
   
    var question = request.body.question;
    var answer = request.body.answer;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('question',sql.NVarChar(1000), question);
        req.input('answer',sql.NVarChar, answer);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_FAQ", function(err, data){
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