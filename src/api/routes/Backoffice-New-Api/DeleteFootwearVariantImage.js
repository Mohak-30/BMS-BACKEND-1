const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   

    var footvariantid = request.body.footvariantid;
    var imageurl = request.body.imageurl;

    
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('footvariantid',sql.Int, footvariantid);
        req.input('imageurl',sql.NVarChar(200), imageurl);
       
    
        req.execute("dbo.Delete_FootwearVariantImage", function(err, data){
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