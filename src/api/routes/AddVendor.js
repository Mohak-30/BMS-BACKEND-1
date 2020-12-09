const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
  
    var type = request.body.type;
    var code = request.body.code;
    var name = request.body.name;
    var email= request.body.email;
    var mobile= request.body.mobile;
    var phone= request.body.phone;
    var gstin= request.body.gstin;
    var pan= request.body.pan;
    var dl= request.body.dl;
    var totime= request.body.totime;
    var fromtime= request.body.fromtime;
    var address = request.body.address;
    var latitude = request.body.lat;
    var longitude = request.body.long;
    var landmark = request.body.landmark;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var weeklyoff = request.body.weeklyoff;
    var homedelivery = request.body.homedelivery;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    var fssai = request.body.fssai;
    var pathlicense = request.body.pathlicense;
    var bankname = request.body.bankname;
    var branch = request.body.branch;
    var ifsc = request.body.ifsc;
    var accountnumber = request.body.accountnumber;
    var cheque = request.body.cheque;
    var agreement = request.body.agreement;
    var showonwebsite = request.body.showonwebsite;




    try{
        const req = new sql.Request(dbConnection);
    
        req.input('type',sql.NVarChar(100), type);
        req.input('code',sql.NVarChar(100), code);
        req.input('name',sql.NVarChar(200), name);
        req.input('email',sql.NVarChar(200), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('phone',sql.NVarChar(15), phone);
        req.input('gstin',sql.NVarChar(100), gstin);
        req.input('pan',sql.NVarChar(100), pan);
        req.input('dl',sql.NVarChar(100), dl);
        req.input('totime',sql.NVarChar(100), totime);
        req.input('fromtime',sql.NVarChar(100), fromtime);
        req.input('address',sql.NVarChar(200), address);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('latitude',sql.NVarChar(200), latitude);
        req.input('longitude',sql.NVarChar(200), longitude);
        req.input('city',sql.NVarChar(100), city);
        req.input('state',sql.NVarChar(100), state);
        req.input('country',sql.NVarChar(100), country);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('weeklyoff',sql.NVarChar(500), weeklyoff);
        req.input('homedelivery',sql.NVarChar(10), homedelivery);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);

        req.input('fssai',sql.NVarChar(200), fssai);
        req.input('pathlicense',sql.NVarChar(200), pathlicense);
        req.input('bankname',sql.NVarChar(100), bankname);
        req.input('branch',sql.NVarChar(100), branch);
        req.input('ifsc',sql.NVarChar(100), ifsc);
        req.input('accountnumber',sql.NVarChar(100), accountnumber);
        req.input('cheque',sql.NVarChar(200), cheque);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('agreement',sql.NVarChar(10), agreement);
       
    
        req.execute("dbo.Add_Vendor", function(err, data){
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