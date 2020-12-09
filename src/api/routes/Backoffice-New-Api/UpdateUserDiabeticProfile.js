const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var areyoudiabetic = request.body.areyoudiabetic;
    var typeofdiabetic = request.body.typeofdiabetic;
    var diagnosed = request.body.diagnosed;

    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

   

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('areyoudiabetic',sql.NVarChar(10), areyoudiabetic);
        req.input('typeofdiabetic',sql.NVarChar(50), typeofdiabetic);
        req.input('diagnosed',sql.NVarChar(200), diagnosed);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);


  

        req.execute("dbo.Update_UserDiabeticProfile", function(err, data){
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