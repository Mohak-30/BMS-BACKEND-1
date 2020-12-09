const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var companyname = request.body.companyname;
    var address = request.body.address;
    var country = request.body.country;
    var state = request.body.state;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var title = request.body.title;
    var personname = request.body.personname;
    var persondesignation = request.body.persondesignation;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var services = request.body.services; 
    var workingwith = request.body.workingwith;
    var aboutbusiness = request.body.aboutbusiness;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


    try{
        const req = new sql.Request(dbConnection);


        req.input('companyname',sql.NVarChar(200), companyname);
        req.input('address',sql.NVarChar(500), address);
        req.input('country',sql.NVarChar(50), country);
        req.input('state',sql.NVarChar(50), state);
        req.input('city',sql.NVarChar(50), city);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('title',sql.NVarChar(10), title);
        req.input('personname',sql.NVarChar(100), personname);
        req.input('persondesignation',sql.NVarChar(100), persondesignation);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('services',sql.NVarChar(200), services);
        req.input('workingwith',sql.NVarChar(500), workingwith);
        req.input('aboutbusiness',sql.NVarChar(1000), aboutbusiness);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_SellWithUs", function(err, data){
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