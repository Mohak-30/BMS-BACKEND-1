const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../../utilities/db1");


router.get("/", function(request, response){
   
    response.sendFile(__dirname+"/Resp.html");


    try{
        

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;