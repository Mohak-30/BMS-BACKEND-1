const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var menurightid = request.body.menurightid;
    var access = request.body.access;

    try{
        const req = new sql.Request(dbConnection);

        req.input('menurightid',sql.Int, menurightid);
        req.input('access',sql.NVarChar(10), access);


        req.execute("dbo.Update_MenuRights", function(err, data){
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