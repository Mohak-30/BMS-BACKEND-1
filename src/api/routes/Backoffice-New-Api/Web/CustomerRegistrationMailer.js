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
                        
                        '<html>'+
                        '<head>'+
                    
                        '</head>'+
                        '<body>'+
                            '<table width="100%" style="font-family: Lato, sans-serif;" cellpadding="0" cellspacing="0" width="100%">'+
                                '<tr>'+
                                    '<td>'+
                                        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px;border:1px solid #e8e8e8">'+
                                           ' <tbody>'+
                                               ' <tr style="background:#fff;padding:10px;border-bottom:1px solid #000">'+
                                                   ' <td style="padding:10px">'+
                                                        '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png">'+
                                                    '</td>'+
                                                    '<td>'+
                                                       '<table style="float:right;margin-right:10px">'+
                                                        '<tr>'+
                                                            '<td colspan="5" style="text-align:center;padding-bottom:5px">'+
                                                        '<p style="font-size: 13px;">Connect with BeatMySugar</p>'+
                    
                                                            '</td>'+
                                                        '</tr>'+
                                                          ' <tr style="text-align: right;">'+
                                                            
                                                               '<td><a href="https://www.facebook.com/beatmysugarofficial/" target="_blank"><img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/fb.png" style="width:30px"></a></td>'+
                                                               '<td><a href="https://www.instagram.com/beatmysugarofficial/" target="_blank"><img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/instagram.png" style="width:30px"></a></td>'+
                                                               '<td><a href="https://twitter.com/BeatMySugar" target="_blank"><img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/twit.png" style="width:30px"></a></td>'+
                                                               '<td><a href="https://www.linkedin.com/company/beatmysugar/" target="_blank"><img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/linkedin.png" style="width:30px"></a></td>'+
                                                               '<td><a href="https://www.youtube.com/channel/UCvM_zxRafVoBumfBKud1swg" target="_blank"><img src="https://backoffice.beatmysugar.com/Images/Mailer-Images/yout.png" style="width:30px"></a></td>'+
                                                           '</tr>'+
                                                       '</table>'+
                                                    '</td>'+
                                                '</tr>'+
                                              
                                               ' <tr>'+
                                                   ' <td style="background:#fff;padding:20px 20px 10px;border-top:1px solid #fef1f1" colspan="2">'+
                                                        '<table style="font-size:14px" >'+
                                                           ' <tr>'+
                                                               ' <td style="padding-bottom: 15px;">'+
                                                                    'Hi <b>'+name+',</b>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                            '<tr>'+
                                                               ' <td style="padding-bottom: 15px;">'+
                                                                    'Welcome to <b>BeatMySugar</b>, your very own world for Simplifying Diabetes Management.'+
                                                                '</td>'+
                                                            '</tr>'+
                                                           
                                                            '<tr>'+
                                                            ' <td style="padding-bottom: 15px;">'+
                                                                 '<a href="https://beatmysugar.com/verifyemail/'+email+'">Click Here To Verify Your Email Address.</a>'+
                                                             '</td>'+
                                                         '</tr>'+
                                                          
                                                            '<tr>'+
                                                                '<td style="padding-bottom: 5px;">'+
                                                                    'Stay Healthy'+
                                                                '</td>'+
                                                            '</tr>'+
                                                            '<tr>'+
                                                                '<td style="padding-bottom: 15px;">'+
                                                                    'Team <b>BeatMySugar</b>'+
                                                               ' </td>'+
                                                           ' </tr>'+
                                                            
                                                           
                    
                                                       ' </table>'+
                                                       
                                                      
                                                        
                                                   ' </td>'+
                    
                                               ' </tr>'+
                                                '<tr>'+
                                                   ' <td style="width:100%;background: #f6f6f6;padding: 5px 20px;" colspan="2">'+
                                                        '<table style="font-size:13px;    font-size: 13px;text-align: center;" width="100%">'+
                                                           
                                                        //   '  <tr>'+
                                                        //         '<td style="padding-bottom: 5px;">'+
                                                        //            ' <img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width:50px;">'+
                                                        //        ' </td>'+
                                                        //    ' </tr>'+
                                                           ' <tr>'+
                                                               ' <td style="padding-bottom: 5px;padding-top: 5px;">'+
                                                                    '<a href="tel:919024422444">+91-90244-22444</a> | <a href="mailto:wecare@beatmysugar.com">wecare@beatmysugar.com</a>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                            '<tr>'+
                                                                '<td>'+
                                                                   
                                                                '</td>'+
                                                            '</tr>'+
                                                       ' </table>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody>'+
                                       ' </table>'+
                                    '</td>'+
                                '</tr>'+
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


 