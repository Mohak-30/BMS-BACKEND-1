const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var deviceid= request.body.deviceid;
    var vendorid= request.body.vendorid;
    var bmsprice = request.body.bmsprice;
    var bmsmargin= request.body.bmsmargin;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('deviceid',sql.Int, deviceid);
        req.input('vendorid',sql.Int, vendorid);
        req.input('bmsprice',sql.Decimal(18,2), bmsprice);
        req.input('bmsmargin',sql.Decimal(18,2), bmsmargin);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
       
   
    
        req.execute("dbo.Add_DeviceVendorMapping", function(err, data){
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