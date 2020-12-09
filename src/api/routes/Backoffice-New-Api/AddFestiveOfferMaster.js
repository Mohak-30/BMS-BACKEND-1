const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
 
    var title = request.body.title;
    // var category = request.body.category;
    // var productid = request.body.productid;
    var showonwebsite = request.body.showonwebsite;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;

    try{
        const req = new sql.Request(dbConnection);


        req.input('title',sql.NVarChar(500), title);
        // req.input('category',sql.NVarChar(100), category);
        // req.input('productid',sql.Int, productid);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_FestiveOfferMaster", function(err, data){
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