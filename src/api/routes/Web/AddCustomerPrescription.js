const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db");


router.post("/", function(request, response){
   
    var customerid = request.body.customerid;
    var is_yours = request.body.is_yours;
    var name = request.body.name;
    var dob = request.body.dob;
    var gender= request.body.gender;
    var imageurl= request.body.imageurl;
    var updated_by = request.body.updated_by;
    var updated_on = request.body.updated_on;



    try{
        const req = new sql.Request(dbConnection);

        req.input('customerid',sql.Int, customerid);
        req.input('is_yours',sql.NVarChar(10), is_yours);
        req.input('name',sql.NVarChar(100), name);
        req.input('dob',sql.NVarChar(200), dob);
        req.input('gender',sql.NVarChar(10), gender);
        req.input('imageurl',sql.NVarChar(200), imageurl);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int,updated_by);


        req.execute("dbo.Add_CustomerPrescription", function(err, data){
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