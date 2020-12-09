const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var footid= request.body.footid;
    var gender= request.body.gender;
    var us= request.body.us;
    var uk= request.body.uk;
    var euro= request.body.euro;
    var cm= request.body.cm;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;



    try{
        const req = new sql.Request(dbConnection);
    

        req.input('footid',sql.Int, footid);
        req.input('gender',sql.NVarChar(20), gender);
        req.input('uk',sql.Decimal(18,0), uk);
        req.input('us',sql.Decimal(18,0), us);
        req.input('euro',sql.Decimal(18,0), euro);
        req.input('cm',sql.Decimal(18,2), cm);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
       
   
    
        req.execute("dbo.Add_FootCareSizeMapping", function(err, data){
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