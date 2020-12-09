const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var type = request.body.type;
    var photo = request.body.photo;


    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('type',sql.NVarChar(50), type);
        req.input('photo',sql.NVarChar(200), photo);
 
        req.execute("dbo.Update_AdBannerImage", function(err, data){
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