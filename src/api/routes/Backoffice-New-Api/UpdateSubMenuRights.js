const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var submenurightid = request.body.submenurightid;
    var access = request.body.access;

    try{
        const req = new sql.Request(dbConnection);

        req.input('submenurightid',sql.Int, submenurightid);
        req.input('access',sql.NVarChar(10), access);


        req.execute("dbo.Update_SubMenuRights", function(err, data){
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