const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
 
    var foodid = request.body.foodid;
    var item_code = request.body.item_code;
    var item_name = request.body.item_name;
    var brand = request.body.brand;
    var marketer = request.body.marketer;
    var manufacturer = request.body.manufacturer;
    var category = request.body.category;
    var flavour = request.body.flavour;
    var variant = request.body.variant;
    var ingredients = request.body.ingredients;
    var packaging_type = request.body.packaging_type;
    var packaging_size = request.body.packaging_size;
    var product_price = request.body.product_price;
    var discount_percent = request.body.discount_percent;
    var discount_price = request.body.discount_price;
    var description = request.body.description;
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
    var pharma = request.body.pharma;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('foodid',sql.Int, foodid);
        req.input('item_code',sql.NVarChar(100), item_code);
        req.input('item_name',sql.NVarChar(100), item_name);
        req.input('brand',sql.NVarChar(100), brand);
        req.input('marketer',sql.NVarChar(100), marketer);
        req.input('manufacturer',sql.NVarChar(100), manufacturer);
        req.input('category',sql.NVarChar(100), category);
        req.input('packaging_size',sql.NVarChar(100), packaging_size);
        req.input('packaging_type',sql.NVarChar(100), packaging_type);
        req.input('flavour',sql.NVarChar(100), flavour);
        req.input('variant',sql.NVarChar(100), variant);
        req.input('ingredients',sql.NVarChar(500), ingredients);
        req.input('product_price',sql.Decimal(18,2), product_price);
        req.input('discount_percent',sql.Decimal(18,2), discount_percent);
        req.input('discount_price',sql.Decimal(18,2), discount_price);
        req.input('description',sql.NVarChar, description);
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
        req.input('pharma',sql.NVarChar(100), pharma);
       
   
    
        req.execute("dbo.Update_Food", function(err, data){
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