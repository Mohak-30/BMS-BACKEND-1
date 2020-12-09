const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var empid= request.body.empid;
    var name = request.body.name;
    var email= request.body.email;
    var mobile= request.body.mobile;
    var usertype = request.body.usertype;
    var designation = request.body.designation;
    var department = request.body.department;
    var gender = request.body.gender;
    var dob = request.body.dob;
    var doj = request.body.doj;
    var maritalstatus = request.body.maritalstatus;
    var doa = request.body.doa;
    var adhaar = request.body.adhaar;
    var pan = request.body.pan;
    var dl = request.body.dl;
    var vehiclenumber = request.body.vehiclenumber;
    var photo = request.body.photo;
    var fatherorspousename = request.body.fatherorspousename;
    var bloodgroup = request.body.bloodgroup;
    var chronicdisease = request.body.chronicdisease;
    var medicalhistory= request.body.medicalhistory;
    var permanentaddress = request.body.permanentaddress;
    var permanentcountry = request.body.permanentcountry;
    var permanentcity = request.body.permanentcity;
    var permanentstate = request.body.permanentstate;
    var permanentpincode = request.body.permanentpincode;
    var presentaddress = request.body.presentaddress;
    var presentcountry= request.body.presentcountry;
    var presentcity = request.body.presentcity;
    var presentstate = request.body.presentstate;
    var presentpincode = request.body.presentpincode;
    var status = request.body.status;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
    var password = request.body.password;


    // console.log(request.body)

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('empid',sql.NVarChar(500), empid);
        req.input('name',sql.NVarChar(100), name);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('usertype',sql.NVarChar(100), usertype);
        req.input('designation',sql.NVarChar(100), designation);
        req.input('department',sql.NVarChar(100), department);
        req.input('gender',sql.NVarChar(20), gender);
        req.input('dob',sql.NVarChar(100), dob);
        req.input('doj',sql.NVarChar(100), doj);
        req.input('maritalstatus',sql.NVarChar(50), maritalstatus);
        req.input('doa',sql.NVarChar(100), doa);
        req.input('adhaar',sql.NVarChar(50), adhaar);
        req.input('pan',sql.NVarChar(50), pan);
        req.input('dl',sql.NVarChar(50), dl);
        req.input('vehiclenumber',sql.NVarChar(50), vehiclenumber);
        req.input('photo',sql.NVarChar(100), photo);
        req.input('fatherorspousename',sql.NVarChar(100), fatherorspousename);
        req.input('bloodgroup',sql.NVarChar(5), bloodgroup);
        req.input('chronicdisease',sql.NVarChar(200), chronicdisease);
        req.input('medicalhistory',sql.NVarChar(200), medicalhistory);
        req.input('permanentaddress',sql.NVarChar(100), permanentaddress);
        req.input('permanentcountry',sql.NVarChar(50), permanentcountry);
        req.input('permanentcity',sql.NVarChar(50), permanentcity);
        req.input('permanentstate',sql.NVarChar(50), permanentstate);
        req.input('permanentpincode',sql.NVarChar(10), permanentpincode);
        req.input('presentaddress',sql.NVarChar(100), presentaddress);
        req.input('presentcountry',sql.NVarChar(50), presentcountry);
        req.input('presentcity',sql.NVarChar(50), presentcity);
        req.input('presentstate',sql.NVarChar(50), presentstate);
        req.input('presentpincode',sql.NVarChar(10), presentpincode);
        req.input('status',sql.NVarChar(10), status);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);
       
    
        req.execute("dbo.Add_Staff", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                var hashPassword = sha512(data.recordset[0].fld_salt+password);

                const req2 = new sql.Request(dbConnection);

                req2.input('password',sql.NVarChar(500), hashPassword);
                req2.input('staffid',sql.Int, data.recordset[0].StaffId);
                req2.input('updatedon',sql.NVarChar(100), updatedon);
                req2.input('updatedby',sql.Int, updatedby);
        

                req2.execute("dbo.ChangeStaffPassword", function(err2, data2){
                    if(err2){
                        console.log("Error while executing the SP - [error] " + err2);
                        response.status(404).json({
                            data:err2.message
                        });
                    }else{

                        response.status(200).json({
                            data: data.recordset
                        });

                    }
                })
                

                
            }
        });
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;