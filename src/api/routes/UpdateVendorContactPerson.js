const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var contact_id = request.body.contact_id;
    var vendor_id = request.body.vendor_id;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var phone = request.body.phone;
    var address = request.body.address;
    var landmark = request.body.landmark;
    var country = request.body.country;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var week = request.body.week;
    var state = request.body.state;
    var contact_person_name= request.body.contact_person_name;
    var contact_person_email= request.body.contact_person_email;
    var contact_person_mobile = request.body.contact_person_mobile;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('contact_id',sql.Int, contact_id );
        req.input('vendor_id',sql.Int, vendor_id );
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('phone',sql.NVarChar(15), phone);
        req.input('address',sql.NVarChar(200), address);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('country',sql.NVarChar(100), country);
        req.input('state',sql.NVarChar(100), state);
        req.input('city',sql.NVarChar(100), city);
        req.input('pincode',sql.NVarChar(100), pincode);
        req.input('week',sql.NVarChar(100), week);
        req.input('contact_person_name',sql.NVarChar(200), contact_person_name);
        req.input('contact_person_email',sql.NVarChar(200), contact_person_email);
        req.input('contact_person_mobile',sql.NVarChar(15), contact_person_mobile);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_VendorContactPerson", function(err, data){
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