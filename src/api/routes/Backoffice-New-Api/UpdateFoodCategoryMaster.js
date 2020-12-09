const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var foodid = request.body.foodid;
    var category = request.body.category;
    var status = request.body.status;
    var abv = request.body.abv;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;

    try{
        const req = new sql.Request(dbConnection);

        req.input('foodid',sql.Int, foodid);
        req.input('category',sql.NVarChar(100), category);
        req.input('status',sql.NVarChar(10), status);
        req.input('abv',sql.NVarChar(10), abv);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Update_FoodCategoryMaster", function(err, data){
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