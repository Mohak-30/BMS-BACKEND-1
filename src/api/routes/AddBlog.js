const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var category = request.body.category;
    var sub_category= request.body.sub_category;
    var title= request.body.title;
    var short_description = request.body.short_description;
    var article_content = request.body.article_content;
    var by_whom = request.body.by_whom;
    var publish_date = request.body.publish_date;
    var preview_image = request.body.preview_image;
    var cover_image = request.body.cover_image;
    var tags = request.body.tags;
    var review = request.body.review;
    var show_on_website = request.body.show_on_website;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('category',sql.NVarChar(100), category);
        req.input('sub_category',sql.NVarChar(100), sub_category);
        req.input('title',sql.NVarChar(500), title);
        req.input('short_description',sql.NVarChar, short_description);
        req.input('article_content',sql.NVarChar, article_content);
        req.input('by_whom',sql.NVarChar(50), by_whom);
        req.input('publish_date',sql.NVarChar(200), publish_date);
        req.input('preview_image',sql.NVarChar(200), preview_image);
        req.input('cover_image',sql.NVarChar(200), cover_image);
        req.input('tags',sql.NVarChar(3000), tags);
        req.input('review',sql.NVarChar(100), review);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_Blog", function(err, data){
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