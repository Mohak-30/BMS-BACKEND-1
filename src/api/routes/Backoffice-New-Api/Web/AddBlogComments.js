const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   

    var blog_id = request.body.blog_id;
    var customer_email = request.body.customer_email;
    var comment = request.body.comment;
    var approval_status = request.body.approval_status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;



    try{
        const req = new sql.Request(dbConnection);
    
        req.input('blog_id',sql.Int, blog_id);
        req.input('customer_email',sql.NVarChar(100), customer_email);
        req.input('comment',sql.NVarChar, comment);
        req.input('approval_status',sql.NVarChar(15), approval_status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_BlogComments", function(err, data){
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