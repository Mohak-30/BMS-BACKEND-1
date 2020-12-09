const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var photo = request.body.photo;
    var title = request.body.title;
    var name = request.body.name;
    var designation = request.body.designation;
    var shortdescription = request.body.shortdescription;
    var profile = request.body.profile;
    var address = request.body.address;
    var country= request.body.country;
    var state = request.body.state;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var phone = request.body.phone;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var showonwebsite = request.body.showonwebsite;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;

    try{
        const req = new sql.Request(dbConnection);


        req.input('photo',sql.NVarChar(200), photo);
        req.input('title',sql.NVarChar(10), title);
        req.input('name',sql.NVarChar(100), name);
        req.input('designation',sql.NVarChar(100), designation);
        req.input('shortdescription',sql.NVarChar(350), shortdescription);
        req.input('profile',sql.NVarChar(2500), profile);
        req.input('address',sql.NVarChar(200), address);
        req.input('city',sql.NVarChar(50), city);
        req.input('state',sql.NVarChar(50), state);
        req.input('country',sql.NVarChar(50), country);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('phone',sql.NVarChar(20), phone);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('showonwebsite',sql.NVarChar(5), showonwebsite);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_Contributors", function(err, data){
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