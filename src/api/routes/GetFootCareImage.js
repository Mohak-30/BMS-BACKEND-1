const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var footid= request.body.footid;

    try{
        const req = new sql.Request(dbConnection);
    

        req.input('footid',sql.Int, footid);
     
    
        req.execute("dbo.Get_FootImageMapping", function(err, data){
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