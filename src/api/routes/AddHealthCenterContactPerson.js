const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var healthcenter_id = request.body.healthcenter_id;
    var contact_person_name= request.body.contact_person_name;
    var contact_person_email= request.body.contact_person_email;
    var contact_person_mobile = request.body.contact_person_mobile;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('healthcenter_id',sql.Int, healthcenter_id );
        req.input('contact_person_name',sql.NVarChar(200), contact_person_name);
        req.input('contact_person_email',sql.NVarChar(200), contact_person_email);
        req.input('contact_person_mobile',sql.NVarChar(15), contact_person_mobile);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_HealthCenterContactPerson", function(err, data){
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