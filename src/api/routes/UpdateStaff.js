const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var staff_id = request.body.staff_id;
    var staff_name = request.body.staff_name;
    var email= request.body.email;
    var mobile= request.body.mobile;
    var user_type = request.body.user_type;
    var designation = request.body.designation;
    var department = request.body.department;
    var gender = request.body.gender;
    var date_of_birth = request.body.date_of_birth;
    var date_of_joining = request.body.date_of_joining;
    var marital_status = request.body.marital_status;
    var anniversary_date = request.body.anniversary_date;
    var adhaar = request.body.adhaar;
    var pan = request.body.pan;
    var driving_license = request.body.driving_license;
    var vehicle_number = request.body.vehicle_number;
    // var photo = request.body.photo;
    var father_spouse_name = request.body.father_spouse_name;
    var blood_group = request.body.blood_group;
    var chronic_disease = request.body.chronic_disease;
    var medical_history= request.body.medical_history;
    var permanent_address = request.body.permanent_address;
    var permanent_country = request.body.permanent_country;
    var permanent_city = request.body.permanent_city;
    var permanent_state = request.body.permanent_state;
    var permanent_pincode = request.body.permanent_pincode;
    var present_address = request.body.present_address;
    var present_country= request.body.present_country;
    var present_city = request.body.present_city;
    var present_state = request.body.present_state;
    var present_pincode = request.body.present_pincode;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;




    try{
        const req = new sql.Request(dbConnection);
    
        req.input('staff_id',sql.Int, staff_id);
        req.input('staff_name',sql.NVarChar(100), staff_name);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('user_type',sql.NVarChar(50), user_type);
        req.input('designation',sql.NVarChar(50), designation);
        req.input('department',sql.NVarChar(50), department);
        req.input('gender',sql.NVarChar(50), gender);
        req.input('date_of_birth',sql.NVarChar(200), date_of_birth);
        req.input('date_of_joining',sql.NVarChar(200), date_of_joining);
        req.input('marital_status',sql.NVarChar(50), marital_status);
        req.input('anniversary_date',sql.NVarChar(200), anniversary_date);
        req.input('adhaar',sql.NVarChar(50), adhaar);
        req.input('pan',sql.NVarChar(50), pan);
        req.input('driving_license',sql.NVarChar(50), driving_license);
        req.input('vehicle_number',sql.NVarChar(50), vehicle_number);
        // req.input('photo',sql.NVarChar(200), photo);
        req.input('father_spouse_name',sql.NVarChar(100), father_spouse_name);
        req.input('blood_group',sql.NVarChar(50), blood_group);
        req.input('chronic_disease',sql.NVarChar(200), chronic_disease);
        req.input('medical_history',sql.NVarChar(1000), medical_history);
        req.input('permanent_address',sql.NVarChar(100), permanent_address);
        req.input('permanent_country',sql.NVarChar(50), permanent_country);
        req.input('permanent_city',sql.NVarChar(50), permanent_city);
        req.input('permanent_state',sql.NVarChar(50), permanent_state);
        req.input('permanent_pincode',sql.NVarChar(50), permanent_pincode);
        req.input('present_address',sql.NVarChar(100), present_address);
        req.input('present_country',sql.NVarChar(50), present_country);
        req.input('present_city',sql.NVarChar(50), present_city);
        req.input('present_state',sql.NVarChar(50), present_state);
        req.input('present_pincode',sql.NVarChar(50), present_pincode);
        req.input('status',sql.NVarChar(10), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_Staff", function(err, data){
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