const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var health_center_id = request.body.health_center_id;
    var doctor_id= request.body.doctor_id;
    var totime= request.body.totime;
    var fromtime = request.body.fromtime;
    var totime2= request.body.totime2;
    var fromtime2 = request.body.fromtime2;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    // console.log(request.body)


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('health_center_id',sql.Int, health_center_id);
        req.input('doctor_id',sql.Int, doctor_id);
        req.input('totime',sql.NVarChar(100), totime);
        req.input('fromtime',sql.NVarChar(100), fromtime);
        req.input('totime2',sql.NVarChar(100), totime2);
        req.input('fromtime2',sql.NVarChar(100), fromtime2);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Add_HealthCenterDoctorMapping", function(err, data){
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