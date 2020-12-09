const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
   
    var id = request.body.id;
    var type = request.body.type;
    var name = request.body.name;
    var address = request.body.address;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var landmark = request.body.landmark;
    var area = request.body.area;
    var phone = request.body.phone;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var website = request.body.website;
    var latitude = request.body.latitude;
    var longitude = request.body.longitude;
    var showonwebsite = request.body.showonwebsite;
    var approved = request.body.approved;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('type',sql.NVarChar(100), type);
        req.input('name',sql.NVarChar(100), name);
        req.input('address',sql.NVarChar(200), address);
        req.input('city',sql.NVarChar(50), city);
        req.input('state',sql.NVarChar(50), state);
        req.input('country',sql.NVarChar(50), country);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('area',sql.NVarChar(200), area);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('phone',sql.NVarChar(20), phone);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('website',sql.NVarChar(100), website);
        req.input('latitude',sql.DECIMAL(18,2), latitude);
        req.input('longitude',sql.DECIMAL(18,2), longitude);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('showonwebsite',sql.NVarChar(10), showonwebsite);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

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