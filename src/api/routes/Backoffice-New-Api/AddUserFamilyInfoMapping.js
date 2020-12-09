const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var userid = request.body.userid;
    var diabeticmember = request.body.diabeticmember;
    var title = request.body.title;
    var name= request.body.name;
    var dob= request.body.dob;
    var relation = request.body.relation;
    var type = request.body.type;
    var diagnosedate = request.body.diagnosedate;
    var occupation = request.body.occupation;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
   



    try{
        const req = new sql.Request(dbConnection);

        req.input('userid',sql.Int, userid);
        req.input('diabeticmember',sql.NVarChar(10), diabeticmember);
        req.input('title',sql.NVarChar(20), title);
        req.input('name',sql.NVarChar(100), name);
        req.input('dob',sql.NVarChar(200), dob);
        req.input('relation',sql.NVarChar(100), relation);
        req.input('type',sql.NVarChar(100), type);
        req.input('diagnosedate',sql.NVarChar(200), diagnosedate);
        req.input('occupation',sql.NVarChar(100), occupation);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int,updatedby);


        req.execute("dbo.Add_UserFamilyInfoMapping", function(err, data){
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