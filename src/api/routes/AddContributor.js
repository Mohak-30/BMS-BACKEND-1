const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var name= request.body.name;
    var type = request.body.type;
    var intro= request.body.intro;
    var profile= request.body.profile;
    var show= request.body.show;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    // console.log(request.body)


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('name',sql.NVarChar(100), name);
        req.input('type',sql.NVarChar(100), type);
        req.input('intro',sql.NVarChar, intro);
        req.input('profile',sql.NVarChar, profile);
        req.input('show',sql.NVarChar(10), show);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_Contributor", function(err, data){
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