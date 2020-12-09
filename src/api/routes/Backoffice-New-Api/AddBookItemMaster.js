const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var title = request.body.title;
    var authorname = request.body.authorname;
    var publishedby = request.body.publishedby;
    var categoryid = request.body.categoryid;
    var aboutauthor = request.body.aboutauthor;
    var aboutbook = request.body.aboutbook;
    var reutrnable = request.body.reutrnable;
    var returnabledays = request.body.returnabledays;
    var hsncode = request.body.hsncode;
    var gstpercent = request.body.gstpercent;
    var approved = request.body.approved;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
   


    try{
        const req = new sql.Request(dbConnection);

        req.input('title',sql.NVarChar(200), title);
        req.input('authorname',sql.NVarChar(200), authorname);
        req.input('publishedby',sql.NVarChar(200), publishedby);
        req.input('categoryid',sql.Int, categoryid);
        req.input('aboutbook',sql.NVarChar, aboutbook);
        req.input('aboutauthor',sql.NVarChar, aboutauthor);
        req.input('returnabledays',sql.Int, returnabledays);
        req.input('reutrnable',sql.NVarChar(5), reutrnable);
        req.input('hsncode',sql.NVarChar(100), hsncode);
        req.input('gstpercent',sql.Decimal(18,2), gstpercent);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_BookItemMaster", function(err, data){
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