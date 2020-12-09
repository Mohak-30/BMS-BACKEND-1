const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var name = request.body.name;
    var dob = request.body.dob;
    var gender = request.body.gender;
    var maritalstatus = request.body.maritalstatus;
    var occuption = request.body.occuption;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

    // console.log(request.body)
   

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('name',sql.NVarChar(100), name);
        req.input('dob',sql.NVarChar(200), dob);
        req.input('gender',sql.NVarChar(10), gender);
        req.input('maritalstatus',sql.NVarChar(10), maritalstatus);
        req.input('occuption',sql.NVarChar(100), occuption);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);


  

        req.execute("dbo.Update_UserInfoBasic", function(err, data){
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