const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var filterid = request.body.filterid;
    var covidid = request.body.covidid;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;
console.log(request.body)
    try{
        const req = new sql.Request(dbConnection);


        req.input('filterid',sql.Int, filterid);
        req.input('covidid',sql.Int, covidid);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_CovidItemMaster_FilterMapping", function(err, data){
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