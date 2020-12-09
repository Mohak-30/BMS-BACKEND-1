const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var vendorid = request.body.vendorid;
    var logo = request.body.logo;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('vendorid',sql.Int, vendorid);
        req.input('logo',sql.NVarChar(200), logo);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
    
        req.execute("dbo.Update_VendorLogo", function(err, data){
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