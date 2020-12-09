const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var vendorid = request.body.vendorid;
    var name = request.body.name;
    var designation = request.body.designation;
    var department = request.body.department;
    var phone = request.body.phone;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;


    try{
        const req = new sql.Request(dbConnection);
    
        req.input('vendorid',sql.Int, vendorid);
        req.input('name',sql.NVarChar(100), name);
        req.input('designation',sql.NVarChar(100), designation);
        req.input('department',sql.NVarChar(100), department);
        req.input('phone',sql.NVarChar(20), phone);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);
    
        req.execute("dbo.Add_VendorContactPersonMapping", function(err, data){
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