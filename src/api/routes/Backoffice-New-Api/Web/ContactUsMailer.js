const express = require("express");
const router = express.Router();
const sql = require("mssql");

// const dbConnection = require("../../utilities/db2");
var nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');
var smtpTransport = require("nodemailer-smtp-transport");

var QRCode = require('qrcode')

var data = ''
var CheckVal = ''

router.post("/", function(request, response){


    var email = request.body.email;
    var name = request.body.name;
    var company = request.body.company;
    var mobile = request.body.mobile;
    var message = request.body.message;

    // console.log(request.body)


    try{
     
    


                    const mailOptions = {
                     
                        from: name+' <wecare@beatmysugar.com>', // sender address
                        to: 'wecare@beatmysugar.com', // list of receivers
                        subject: 'You received a Message.', // Subject line
                        html:
                        
                        '<!doctype html>'+
                        '<html>'+
                        '<head>'+
                        '<meta charset="utf-8">'+
                        '<title>Customer Order Form</title>'+
                        '</head>'+
                        
                        '<body style=font-family: Gotham, Helvetica Neue, Helvetica, Arial, sans-serif>'+
                        '<div class="wrapper" style="padding: 10px;width: 1000px;margin: auto;border: .5px solid;">'+
                            
                        '<div class="container" style="padding: 5px">'+
                            '<img style="width: 100px" src="http://backoffice.beatmysugar.com/Images/Mailer-Images/logo.png" alt="">'+
                           ' </div><hr>'+
                          '<div class="container">'+
                           ' <h4>Dear Admin,</h4>'+
                           ' <p>You Have Recieved a message from <b>BeatmySugar : </b></p>'+
                          '</div>'+
                        
                        '<br>'+
                           
                              '<table style="padding-bottom: 20px">'+
                              '<tr>'+
                                '<td>Name:</td>'+
                                
                                '<td style="padding-left: 110px">'+name+'</td>'+
                             ' </tr>'+
                              '<tr>'+
                                '<td>Company Name</td>'+
                            
                                  '<td style="padding-left: 110px">'+company+'</td>'+
                             ' </tr>'+
                             ' <tr>'+
                                '<td>Email:</td>'+
                                 
                                    '<td style="padding-left: 110px">'+email+' </td>'+

                              
                              '</tr>'+
                             ' <tr>'+
                                '<td>Mobile:</td>'+
                                 
                                '<td style="padding-left: 110px">'+
                                mobile+
                                '</td>'+
                              '</tr>'+
                                   '<tr>'+
                                '<td>message:</td>'+
                                    
                                '<td style="padding-left: 110px">'+
                               message+

                                '</td>'+
                              '</tr>'+
                            '</table>' +
                            
                           '</div>'+
                        '</body>'+
                        '</html>'
                        
                        
                    
                    }
    
                      

                      transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
                      transporter.sendMail(mailOptions, function (err, info) {
                        if(err){
                          response.status(500);
                          console.log(err)
                        }
                        else{
                          response.status(200);
                          console.log(info);
                          response.send(info);
                        }
                         
                     });
                
                   
              

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use SSL,
  auth: {

         user: 'wecare@beatmysugar.com',
         pass: 'health@2020'
        
     }
 });


 