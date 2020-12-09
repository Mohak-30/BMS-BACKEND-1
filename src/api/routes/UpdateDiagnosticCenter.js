const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var diagnostic_center_id = request.body.diagnostic_center_id;
    var regno = request.body.regno;
    var logo= request.body.logo;
    var name= request.body.name;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var phone = request.body.phone;
    var website = request.body.website;
    var totime= request.body.totime;
    var fromtime= request.body.fromtime;
    var working_days= request.body.working_days;
    var facilities_available = request.body.facilities_available;
    var profile = request.body.profile;
    var accreditation = request.body.accreditation;
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
    var facebook = request.body.facebook;
    var twitter = request.body.twitter;
    var linkedin = request.body.linkedin;
    var instagram = request.body.instagram;
    var youtube = request.body.youtube;
    var consent = request.body.consent;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;



    try{
        const req = new sql.Request(dbConnection);
    

        req.input('diagnostic_center_id',sql.Int, diagnostic_center_id);
        req.input('regno',sql.NVarChar(200), regno);
        req.input('logo',sql.NVarChar(200), logo);
        req.input('name',sql.NVarChar(100), name);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('phone',sql.NVarChar(15), phone);
        req.input('website',sql.NVarChar(200), website);
        req.input('totime',sql.NVarChar(200), totime);
        req.input('fromtime',sql.NVarChar(200), fromtime);
        req.input('working_days',sql.NVarChar(500), working_days);
        req.input('facilities_available',sql.NVarChar(3000), facilities_available);
        req.input('accreditation',sql.NVarChar(3000), accreditation);
        req.input('profile',sql.NVarChar, profile);
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
        req.input('facebook',sql.NVarChar(200), facebook);
        req.input('twitter',sql.NVarChar(200), twitter);
        req.input('instagram',sql.NVarChar(200), instagram);
        req.input('linkedin',sql.NVarChar(200), linkedin);
        req.input('youtube',sql.NVarChar(200), youtube);
        req.input('consent',sql.NVarChar(100), consent);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);

       
    
        req.execute("dbo.Update_DiagnosticCenter", function(err, data){
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