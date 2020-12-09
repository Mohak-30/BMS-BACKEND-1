const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db");


router.post("/", function(request, response){
   
    var email = request.body.email;

    try{
        const req = new sql.Request(dbConnection);

        req.input('email',sql.NVarChar(200), email);


        req.execute("dbo.Get_LoginEmailExists_Customer", function(err, data){
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