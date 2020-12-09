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

    // console.log(request.body)


    try{
     
    


                    const mailOptions = {
                     
                        from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                        to: email, // list of receivers
                        subject: 'Thank you for Registering.', // Subject line
                        html:
                        
                       ' <!DOCTYPE html>'+
                        '<html>'+
                        '<head>'+
                            '<title>BeatMySugar</title>'+
                        '</head>'+
                       ' <body>'+
                           ' <table style="width:1000px;margin-left: auto; margin-right: auto;">'+
                            '<tbody>'+
                                    '<tr>'+
                                   ' <th colspan="3">'+
                                        '<img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/logo.png" style="margin-top: 0px;width: 10%"/>'+
                                    '</th>'+
                                '</tr>'+
                        
                                '<tr>'+
                                   ' <th><a href="https://www.beatmysugar.com" target="blank" style="float: right;text-decoration: none;color: #7ac2ea;">www.beatmysugar.com</a></th>'+
                                '</tr>'+
                        
                                '<tr>'+
                                    '<td  style="border-bottom:1px solid #507dc0"></td>'+
                             ' </tr>'+
                        
                             ' <tr>'+
                                  '<td style="color: #7a7d82;">'+
                                     ' <p style="font-size: 16px">Hi '+name+',</p>'+
                                      '<p style="text-align: center;" ><b style="color: #7ac2ea;font-size: 25px">Welcome to BeatMySugar</b><br/>'+
                                    '<span >Your very own world of Diabetes Management.</span>'+
                                    '</p>'+
                                     ' <p style="font-size: 16px">Thanks for your registration at BeatMySugar.</p>'+
                                  
                                  '<p style="color:grey;font-size: 14px">Best Wishes,'+
                                      '<br><b style="color: #7ac2ea;font-size: 14px">Team BeatMySugar</b></p> <p></p>'+
                                 
                                 ' </td>'+
                              '</tr>'+
                              '<tr>'+
                                 
                              '</tr>'+
                                  '<tr>'+
                                   ' <td  style="border-bottom:1px solid #507dc0"></td>'+
                            '  </tr>'+
                              
                        '</tbody>'+
                           ' </table>'+
                        
                           ' <table style="width:1000px;margin-left: auto; margin-right: auto; background: linear-gradient(45deg, #7ac2ea, #507dc0);">'+
                        
                                 '<tbody>'+
                                    ' <tr></tr>'+
                                     '<tr></tr>'+
                                        '<tr></tr>'+
                                        '<tr></tr>'+
                                    '<tr>'+
                                         '<th></th>'+
                                         '<th></th>'+
                                         '<th style="color: black; font-size: 19px;margin-top:4px">Contact us</th>'+
                                        ' <th></th>'+
                                         '<th></th>'+
                                         '<th></th>'+
                                         '<th  style="color: black;font-size: 19px"> Social Links</th>'+
                                    ' </tr>'+
                                     ' <tr>'+
                        
                             ' <td></td>'+
                              '<td></td>'+
                                    '<td style="width: 50%; text-align: justify;">'+
                                
                                    '<p style="margin-left: 26%">'+
                                        '<img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/Mail-Icon-white.png" style="width:4.5%;">'+
                                   ' <a href="mailto:wecare@beatmysugar.com" style="text-decoration: none;color:white;font-size: 20px"> wecare@beatmysugar.com</a>'+
                                    '<br>'+
                                   ' <br>'+
                                   ' <img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/phone_dark.png" style="width:4.5%">'+
                                   ' <a href="tel:+919024422444"style="text-decoration: none;color:white;font-size: 18px">‭ +91-902-442-2444</a>'+
                        
                                    '</p>'+
                                    
                                '</td>'+
                                '<td></td>'+
                                '<td style="width:1%"></td>'+
                                
                                 ' <td style="border-left:1px solid white;height: 60px"></td>'+
                                
                            
                        
                                '<td style="text-align: center; ">'+
                                      '<a href="https://www.facebook.com/pg/beatmysugarofficial"target="_blank">'+
                                         ' <img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/face.png" style="width:6%"></a>'+
                                     '<a href="https://www.instagram.com/beatmysugarofficial/" target="_blank">'+
                                        ' <img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/insta.png"style="width:6%"></a>'+
                                             
                                              '<a href="https://www.twitter.com/beatmysugar" target="_blank">'+
                                                  '<img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/twitter.png" style="width:6%"></a>'+
                                             
                                    
                                '</td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td></td>'+
                            '</tr>'+
                        
                                
                                 '</tbody>'+
                            '</table>'+
                        
                        
                        '</body>'+
                        '</html>'
                        
                    
                      };
    
                      

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


 