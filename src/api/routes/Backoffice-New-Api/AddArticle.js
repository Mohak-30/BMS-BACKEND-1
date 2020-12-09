const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var categoryid = request.body.categoryid;
    var subcategoryid = request.body.subcategoryid;
    var title = request.body.title;
    var shortdescription = request.body.shortdescription;
    var content = request.body.content;
    var writtenbyid = request.body.writtenbyid;
    var reviewedbyid = request.body.reviewedbyid;
    var showonwebsite = request.body.showonwebsite;
    var lastsavedon = request.body.lastsavedon;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


    try{
        const req = new sql.Request(dbConnection);

        req.input('categoryid',sql.Int, categoryid);
        req.input('subcategoryid',sql.Int, subcategoryid);
        req.input('title',sql.NVarChar(200), title);
        req.input('shortdescription',sql.NVarChar(600), shortdescription);
        req.input('content',sql.NVarChar, content);
        req.input('writtenbyid',sql.Int, writtenbyid);
        req.input('reviewedbyid',sql.Int, reviewedbyid);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('lastsavedon',sql.NVarChar(100), lastsavedon);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_Article", function(err, data){
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