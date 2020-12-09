const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var book_id = request.body.book_id;
    var item_code = request.body.item_code;
    var title = request.body.title;
    var author_name = request.body.author_name;
    var published_by = request.body.published_by;
    var available_as = request.body.available_as;
    var product_price = request.body.product_price;
    var discount_percent = request.body.discount_percent;
    var discount_price = request.body.discount_price;
    var aboutauthor = request.body.aboutauthor;
    var aboutbook = request.body.aboutbook;
    var returnable = request.body.returnable;
    var returnable_days = request.body.returnable_days;
    var show_on_website = request.body.show_on_website;
    var availability = request.body.availability;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;
    var hsn_code = request.body.hsn_code;
    var gst_rate = request.body.gst_rate;
    var title_bar = request.body.title_bar;
    var meta_description = request.body.meta_description;
    var keywords = request.body.keywords;



    try{
        const req = new sql.Request(dbConnection);
    

        req.input('book_id',sql.Int, book_id);
        req.input('item_code',sql.NVarChar(100), item_code);
        req.input('title',sql.NVarChar(100), title);
        req.input('author_name',sql.NVarChar(100), author_name);
        req.input('published_by',sql.NVarChar(100), published_by);
        req.input('available_as',sql.NVarChar(100), available_as);
        req.input('product_price',sql.Decimal(18,2), product_price);
        req.input('discount_percent',sql.Decimal(18,2), discount_percent);
        req.input('discount_price',sql.Decimal(18,2), discount_price);
        req.input('aboutauthor',sql.NVarChar, aboutauthor);
        req.input('aboutbook',sql.NVarChar, aboutbook);
        req.input('returnable',sql.NVarChar(10), returnable);
        req.input('returnable_days',sql.NVarChar(50), returnable_days);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('availability',sql.NVarChar(100), availability);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
        req.input('hsn_code',sql.NVarChar(100), hsn_code);
        req.input('gst_rate',sql.Decimal(18,2), gst_rate);
        req.input('title_bar',sql.NVarChar(100), title_bar);
        req.input('meta_description',sql.NVarChar(200), meta_description);
        req.input('keywords',sql.NVarChar(200), keywords);
       
   
    
        req.execute("dbo.Update_Book", function(err, data){
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