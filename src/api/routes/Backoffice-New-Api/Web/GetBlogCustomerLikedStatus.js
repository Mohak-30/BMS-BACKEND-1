const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var user_email= request.body.user_email;
    var blog_id= request.body.blog_id;
    


  
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('user_email',sql.NVarChar(100), user_email);
        req.input('blog_id',sql.Int, blog_id);
       
       
    
        req.execute("dbo.Get_CustomerBlogLikedStatus", function(err, data){
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