const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var title = request.body.title;
    var employmenttype = request.body.employmenttype;
    var qualification = request.body.qualification;
    var workexperience = request.body.workexperience;
    var jobdescription = request.body.jobdescription;
    var joiningdate  = request.body.joiningdate;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var approved = request.body.approved;
    var showonwebsite = request.body.showonwebsite;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


    try{
        const req = new sql.Request(dbConnection);

        req.input('title',sql.NVarChar(200), title);
        req.input('employmenttype',sql.NVarChar(200), employmenttype);
        req.input('qualification',sql.NVarChar(1000), qualification);
        req.input('workexperience',sql.NVarChar(1000), workexperience);
        req.input('jobdescription',sql.NVarChar, jobdescription);
        req.input('joiningdate',sql.NVarChar(100), joiningdate);
        req.input('city',sql.NVarChar(50), city);
        req.input('state',sql.NVarChar(50), state);
        req.input('country',sql.NVarChar(50), country);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_Career", function(err, data){
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