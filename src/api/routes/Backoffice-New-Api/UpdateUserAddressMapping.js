const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){

    var id = request.body.id;
    var user_id = request.body.user_id;
    var name = request.body.name;
    var mobile = request.body.mobile;
    var address= request.body.address;
    var street= request.body.street;
    var landmark = request.body.landmark;
    var country = request.body.country;
    var state = request.body.state;
    var city = request.body.city;
    var pincode = request.body.pincode;
    var updated_by = request.body.updated_by;
    var updated_on = request.body.updated_on;

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('user_id',sql.Int, user_id);
        req.input('name',sql.NVarChar(100), name);
        req.input('mobile',sql.NVarChar(20), mobile);
        req.input('address',sql.NVarChar(200), address);
        req.input('street',sql.NVarChar(200), street);
        req.input('landmark',sql.NVarChar(200), landmark);
        req.input('country',sql.NVarChar(50), country);
        req.input('state',sql.NVarChar(50), state);
        req.input('city',sql.NVarChar(50), city);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int,updated_by);


        req.execute("dbo.Update_UserAddressMapping", function(err, data){
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