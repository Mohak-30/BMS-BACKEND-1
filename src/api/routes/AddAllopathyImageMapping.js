const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var medicineid= request.body.medicineid;
    var imageurl= request.body.imageurl;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('medicineid',sql.Int, medicineid);
        req.input('imageurl',sql.NVarChar(200), imageurl);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
       
   
    
        req.execute("dbo.Add_AllopathyImageMapping", function(err, data){
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