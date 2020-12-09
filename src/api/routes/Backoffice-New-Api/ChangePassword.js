const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var staffid = request.body.staffid;
    var password = request.body.password;
    var salt = request.body.salt;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

    var hashPassword = sha512(salt+password);

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('staffid',sql.Int, staffid);
        req.input('password',sql.NVarChar(500), hashPassword);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
    
        req.execute("dbo.ChangeStaffPassword", function(err, data){
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