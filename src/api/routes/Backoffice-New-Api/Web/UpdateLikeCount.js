const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
   
    var like = request.body.like;
    var blog_id= request.body.blog_id;



    try{
        const req = new sql.Request(dbConnection);
    
        req.input('like',sql.Int, like);
        req.input('blog_id',sql.Int, blog_id);
    
       
    
        req.execute("dbo.Update_LikeCount", function(err, data){
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