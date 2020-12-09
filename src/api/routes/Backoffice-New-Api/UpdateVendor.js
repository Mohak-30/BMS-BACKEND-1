const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id; 
    var name = request.body.name;
    var gst = request.body.gst;
    var pan = request.body.pan;
    var tan = request.body.tan;
    var about = request.body.about;
    var email = request.body.email;
    var website = request.body.website;
    var address = request.body.address;
    var landmark = request.body.landmark;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var accountnumber = request.body.accountnumber;
    var bankname = request.body.bankname;
    var branch = request.body.branch;
    var ifsc = request.body.ifsc;
    var status = request.body.status;
    var approved = request.body.approved;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
    var merchantid = request.body.merchantid; 


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('id',sql.Int, id);
        req.input('name',sql.NVarChar(100), name);
        req.input('gst',sql.NVarChar(100), gst);
        req.input('pan',sql.NVarChar(100), pan);
        req.input('tan',sql.NVarChar(100), tan);
        req.input('about',sql.NVarChar, about);
        req.input('email',sql.NVarChar(100), email);
        req.input('website',sql.NVarChar(100), website);
        req.input('address',sql.NVarChar(500), address);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('city',sql.NVarChar(50), city);
        req.input('state',sql.NVarChar(50), state);
        req.input('country',sql.NVarChar(50), country);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('accountnumber',sql.NVarChar(100), accountnumber);
        req.input('bankname',sql.NVarChar(100), bankname);
        req.input('branch',sql.NVarChar(100), branch);
        req.input('ifsc',sql.NVarChar(100), ifsc);
        req.input('status',sql.NVarChar(10), status);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
        req.input('merchantid',sql.NVarChar(100), merchantid);
    
        req.execute("dbo.Update_Vendor", function(err, data){
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