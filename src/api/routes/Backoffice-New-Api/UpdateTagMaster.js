const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var tag = request.body.tag;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
    var status = request.body.status;

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('tag',sql.NVarChar(100), tag);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('status',sql.NVarChar(10), status);

        req.execute("dbo.Update_TagMaster", function(err, data){
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