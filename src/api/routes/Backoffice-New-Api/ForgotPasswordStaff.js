const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

var nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');
var smtpTransport = require("nodemailer-smtp-transport");

const dbConnection = require("../../../utilities/db1");


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

router.post("/", function(request, response){

    
   
    var email = request.body.email;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
    var password = makeid(6);

    console.log(password)
    // var hashPassword = sha512(salt+password);

    try{
        const req = new sql.Request(dbConnection);
    
        req.input('email',sql.NVarChar(200), email);
    
        req.execute("dbo.GetStaffDetails", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{

        const req1 = new sql.Request(dbConnection);
    
        var hashPassword = sha512(data.recordset[0].fld_salt+password);

        req1.input('staffid',sql.Int, data.recordset[0].fld_staffid);
        req1.input('password',sql.NVarChar(500), hashPassword);
        req1.input('updatedon',sql.NVarChar(100), updatedon);
        req1.input('updatedby',sql.Int, updatedby);
    
        req1.execute("dbo.ChangeStaffPassword", function(err2, data2){
            if(err2){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err2.message
                });
            }else{
         
              
                const mailOptions = {
                     
                    from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                    to: email, // list of receivers
                    subject: 'Reset Password.', // Subject line
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
                                                                'Hi <b>'+data.recordset[0].fld_name+',</b>'+
                                                            '</td>'+
                                                        '</tr>'+
                                                        '<tr>'+
                                                           ' <td style="padding-bottom: 15px;">'+
                                                                'We get it, '+data.recordset[0].fld_name+' you forgot your password. It happens to best of us.'+
                                                            '</td>'+
                                                        '</tr>'+
                                                       
                                                        '<tr>'+
                                                           ' <td style="padding-bottom: 15px;">'+
                                                               'Your New Password is - <b>'+password+'</b>'+
                                                           ' </td>'+
                                                       ' </tr>'+

                                                       '<tr>'+
                                                       '<td style="padding-bottom: 5px;">'+
                                                           'Have a great day!<br/>'+
                                                       '</td>'+
                                                   '</tr>'+
                
                                                        '<tr>'+
                                                           ' <td style="padding-bottom: 15px;">'+
                                                               'If you did not request a password reset, or are having any trouble in logging, please let us know.'+
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
            
               

            }
        });
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
  