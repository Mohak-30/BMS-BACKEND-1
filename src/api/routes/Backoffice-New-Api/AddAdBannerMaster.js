const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var verticle = request.body.verticle;
    var type = request.body.type;
    var url = request.body.url;
    var showonwebsite = request.body.showonwebsite;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
    var order = request.body.order;

    // console.log(request.body)

    try{
        const req = new sql.Request(dbConnection);


        req.input('verticle',sql.NVarChar(200), verticle);
        req.input('type',sql.NVarChar(100), type);
        req.input('url',sql.NVarChar(300), url);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('order',sql.Int, order);

        req.execute("dbo.Add_AdBannerMaster", function(err, data){
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