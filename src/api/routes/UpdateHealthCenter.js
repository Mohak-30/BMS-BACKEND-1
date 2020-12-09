const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){

    
   
    var health_center_id = request.body.health_center_id;
    var health_center_type = request.body.health_center_type;
    var name= request.body.name;
    var phone= request.body.phone;
    // var contact_person_name = request.body.contact_person_name;
    // var contact_person_mobile = request.body.contact_person_mobile;
    // var contact_person_email = request.body.contact_person_email;
    var address = request.body.address;
    var landmark = request.body.landmark;
    var country = request.body.country;
    var state = request.body.state;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var latitude = request.body.latitude;
    var longitude = request.body.longitude;
    var other_services = request.body.other_services;
    var consent = request.body.consent;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    // console.log(request.body)


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('health_center_id',sql.Int, health_center_id);
        req.input('health_center_type',sql.NVarChar(100), health_center_type);
        req.input('name',sql.NVarChar(100),name);
        req.input('phone',sql.NVarChar(15), phone);
        // req.input('contact_person_name',sql.NVarChar(100), contact_person_name);
        // req.input('contact_person_email',sql.NVarChar(100), contact_person_email);
        // req.input('contact_person_mobile',sql.NVarChar(15), contact_person_mobile);
        req.input('address',sql.NVarChar(200), address);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('country',sql.NVarChar(100), country);
        req.input('state',sql.NVarChar(100),state);
        req.input('city',sql.NVarChar(100), city);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('latitude',sql.NVarChar(100), latitude);
        req.input('longitude',sql.NVarChar(100), longitude);
        req.input('other_services',sql.NVarChar, other_services);
        req.input('consent',sql.NVarChar(100), consent);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_HealthCenter", function(err, data){
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