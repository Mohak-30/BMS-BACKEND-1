const express = require("express");
const router = express.Router();
const sql = require("mssql");





router.post("/", function(request, response){


    var mobile = request.body.mobile;
    var name = request.body.name;
    var otp = request.body.otp;


        var requestm = require('request');
    try{
    requestm({
        url: 'https://www.instaalerts.zone/SendSMS/sendmsg.php?uname=globaltrendz&pass=abc321&send=RIGHTC&dest='+mobile+'&msg=Hi '+name+', OTP for your mobile number verification is :'+otp+'. DO NOT share this OTP with anyone. BeatMySugar.com',
        method: 'POST',
    }, function(error, responsem, body){
        if(error) {
            console.log(error);
            response.status(500);
            response.send(responsem.statusCode)
        } else {
            console.log(responsem.statusCode, body);
            response.status(200);
           
            response.send(responsem.statusCode)
        }

    });

              

    }catch (err){
        console.log(err)
        response.status(500);
        // response.send(err.message);
    }


});

module.exports = router;



 