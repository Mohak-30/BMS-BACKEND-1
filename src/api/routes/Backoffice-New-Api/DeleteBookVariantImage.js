const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   

    var bookvariantid = request.body.bookvariantid;
    var imageurl = request.body.imageurl;

    
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('bookvariantid',sql.Int, bookvariantid);
        req.input('imageurl',sql.NVarChar(200), imageurl);
       
    
        req.execute("dbo.Delete_BookVariantImage", function(err, data){
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