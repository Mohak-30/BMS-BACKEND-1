const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   


    var branch_id = request.body.branch_id;
    // var diagnostic_center_id = request.body.diagnostic_center_id;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var phone = request.body.phone;
    var totime= request.body.totime;
    var fromtime= request.body.fromtime;
    var working_days= request.body.working_days;
    var branch_location = request.body.branch_location;
    var address = request.body.address;
    var landmark = request.body.landmark;
    var country = request.body.country;
    var state = request.body.state;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var latitude = request.body.longitude;
    var longitude= request.body.longitude;
    var contact_person_name = request.body.contact_person_name;
    var contact_person_mobile = request.body.contact_person_mobile;
    var contact_person_email = request.body.contact_person_email;
    var contact_person_designation = request.body.contact_person_designation;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;



    try{
        const req = new sql.Request(dbConnection);
    

        req.input('branch_id',sql.Int, branch_id);
        // req.input('diagnostic_center_id',sql.Int, diagnostic_center_id);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('phone',sql.NVarChar(15), phone);
        req.input('totime',sql.NVarChar(200), totime);
        req.input('fromtime',sql.NVarChar(200), fromtime);
        req.input('working_days',sql.NVarChar(500), working_days);
        req.input('branch_location',sql.NVarChar(200), branch_location);
        req.input('address',sql.NVarChar(200), address);
        req.input('country',sql.NVarChar(100), country);
        req.input('city',sql.NVarChar(100), city);
        req.input('state',sql.NVarChar(100), state);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('latitude',sql.NVarChar(100), latitude);
        req.input('longitude',sql.NVarChar(100), longitude);
        req.input('contact_person_name',sql.NVarChar(100), contact_person_name);
        req.input('contact_person_mobile',sql.NVarChar(15), contact_person_mobile);
        req.input('contact_person_email',sql.NVarChar(100), contact_person_email);
        req.input('contact_person_designation',sql.NVarChar(100), contact_person_designation);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);

       
    
        req.execute("dbo.Update_DiagnosticCenterBranch", function(err, data){
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