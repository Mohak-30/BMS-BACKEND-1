const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var orderdetailid = request.body.orderdetailid;
    var productphoto = request.body.productphoto;
    var reasonforreturn = request.body.reasonforreturn;
    var comment = request.body.comment;
    var returnrequestedon = request.body.returnrequestedon;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

    try{
        const req = new sql.Request(dbConnection);

        req.input('orderdetailid',sql.Int, orderdetailid);
        req.input('productphoto',sql.NVarChar(200), productphoto);
        req.input('reasonforreturn',sql.NVarChar(500), reasonforreturn);
        req.input('comment',sql.NVarChar, comment);
        req.input('returnrequestedon',sql.NVarChar(200), returnrequestedon)
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Add_ReturnMaster", function(err, data){
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