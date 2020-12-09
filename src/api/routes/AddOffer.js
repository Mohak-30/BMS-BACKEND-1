const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var name = request.body.name;
    var caption = request.body.caption;
    var price = request.body.price;
    var max_price = request.body.max_price;
    var min_price = request.body.min_price;
    var description = request.body.description;
    var code = request.body.code;
    var start_date = request.body.start_date;
    var end_date = request.body.end_date;
    var terms_condition= request.body.terms_condition;
    var show_on_website = request.body.show_on_website;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('name',sql.NVarChar(200), name);
        req.input('caption',sql.NVarChar(500), caption);
        req.input('price',sql.Decimal(18,2), price);
        req.input('max_price',sql.Decimal(18,2), max_price);
        req.input('min_price',sql.Decimal(18,2), min_price);
        req.input('description',sql.NVarChar, description);
        req.input('code',sql.NVarChar(100), code);
        req.input('start_date',sql.NVarChar(200), start_date);
        req.input('end_date',sql.NVarChar(200), end_date);
        req.input('terms_condition',sql.NVarChar, terms_condition);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Add_Offer", function(err, data){
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