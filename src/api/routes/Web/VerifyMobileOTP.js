const express = require("express");
const router = express.Router();
const sql = require("mssql");





router.post("/", function(request, response){


    var mobile = request.body.mobile;
    var name = request.body.name;
    var otp = request.body.otp;


        var request = require('request');
    try{
    request({
        url: 'https://www.instaalerts.zone/SendSMS/sendmsg.php?uname=globaltrendz&pass=abc321&send=RIGHTC&dest='+mobile+'&msg=Hi '+name+', OTP for your mobile number verification is :'+otp+'. DO NOT share this OTP with anyone. BeatMySugar.com',
        method: 'POST',
    }, function(error, response, body){
        if(error) {
            console.log(error);
            // response.status(500);
        } else {
            // response.status(200);
            console.log(response.statusCode, body);
            // response.send(response.statusCode)
        }

    });

              

    }catch (err){
        response.status(500);
        // response.send(err.message);
    }


});

module.exports = router;



 