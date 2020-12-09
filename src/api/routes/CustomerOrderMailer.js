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


    var orderdate = request.body.orderdate;
    var ordernumber = request.body.ordernumber;

    var shippingname = request.body.shippingname;
    var shippingaddress = request.body.shippingaddress;
    var shippingstreet = request.body.shippingstreet;
    var shippinglandmark = request.body.shippinglandmark;
    var shippingcountry = request.body.shippingcountry;
    var shippingstate = request.body.shippingstate;
    var shippingcity = request.body.shippingcity;
    var shippingpincode =request.body.shippingpincode;
    var shippingmobile = request.body.shippingmobile;

    var billingname = request.body.billingname;
    var billingaddress = request.body.billingaddress;
    var billingstreet = request.body.billingstreet;
    var billinglandmark = request.body.billinglandmark;
    var billingcountry = request.body.billingcountry;
    var billingstate = request.body.billingstate;
    var billingcity = request.body.billingcity;
    var billingpincode = request.body.billingpincode;
    var billingmobile = request.body.billingmobile;

    var total= request.body.total;

    var orderDetail= request.body.orderDetail;

    // console.log(request.body)


    try{
     
        var data = ''
        for(var i = 0 ; i <orderDetail.length ; i++)
    
        {
        data = data + 
        ' <tr>'+
        '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
         orderDetail[i].name+'<br/>  Item Code : '+orderDetail[i].code+'   <br/> HSN Code : '+orderDetail[i].hsn+'  <br/> Brand: '+orderDetail[i].brand+'</td>'+
       ' <td style="text-align:center">'+orderDetail[i].quantity+'</td>'+
       ' <td style="text-align: right; padding-right: 1%;">'+orderDetail[i].price+'</td>'+
        '<td style="text-align:center">'+orderDetail[i].tax+'</td>'+
       ' <td style="text-align: right; padding-right: 1%;">'+orderDetail[i].price+'</td>'+
   ' </tr>'
        }


                    const mailOptions = {
                     
                        from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                        to: 'tapan@globaltrendz.com', // list of receivers
                        subject: 'Order Placed.', // Subject line
                        html:


                        //===========new-=========

                        '<html>'+

                        '<head> </head>'+
                        
                        '<body>'+
                        
                          '<table width="100%" style="font-family: Lato, sans-serif;" cellpadding="0" cellspacing="0" width="100%">'+
                        
                           ' <tr>'+
                        
                              '<td>'+
                        
                               ' <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"'+
                                  'style="max-width: 1000px; border: 1px solid #e8e8e8;">'+
                        
                                  '<tbody>'+
                        
                                    '<tr style="'+
                        
                                          'background: #fff;'+
                        
                                          'padding: 10px;'+
                        
                                          'border-bottom: 1px solid #000;'+
                        
                                        '">'+
                        
                                     ' <td style="padding: 10px;">'+
                        
                                        '<img src="http://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" />'+
                        
                                      '</td>'+
                        
                                      '<td>'+
                        
                                        '<table style="float: right; margin-right: 10px;">'+
                        
                                         ' <tr style="text-align: right;">'+
                        
                                            '<td><img src="fb.png" style="width: 30px;" /></td>'+
                        
                                            '<td><img src="insta.png" style="width: 30px;" /></td>'+
                        
                                            '<td><img src="twitter.png" style="width: 30px;" /></td>'+
                        
                                            '<td><img src="linkedin.png" style="width: 30px;" /></td>'+
                        
                                          '</tr>'+
                        
                                        '</table>'+
                        
                                     ' </td>'+
                        
                                    '</tr>'+
                        
                                    '<tr>'+
                        
                                      '<td style="'+
                        
                                            'background: #fff;'+
                        
                                            'padding: 20px 20px 10px;'+
                        
                                            'border-top: 1px solid #fef1f1;'+
                        
                                          '" with="100%" colspan="2">'+
                        
                                        '<table style="font-size: 14px;">'+
                        
                                          '<tbody>'+
                        
                                            '<tr>'+
                        
                                              '<td style="padding-bottom: 15px;">'+
                        
                                                'Hi <b>Saravan,</b>'+
                        
                                              '</td>'+
                        
                                           ' </tr>'+
                        
                                           ' <tr>'+
                        
                                              '<td style="padding-bottom: 5px;">'+
                        
                                                'We"re so glad you chose to shop with'+
                        
                                                '<b>BeatMySugar</b>.'+
                        
                                              '</td>'+
                        
                                            '</tr>'+
                        
                                            '<tr>'+
                        
                                              '<td style="padding-bottom: 15px;">'+
                        
                                               ' Your Order - <b>Order Number </b>has been successfully'+
                        
                                                'placed.'+
                        
                                             ' </td>'+
                        
                                           ' </tr>'+
                        
                                          '</tbody>'+
                        
                                        '</table>'+
                        
                        
                                        '<table style="'+
                        
                                              'width: 1000px;'+
                        
                                              'text-align: center;'+
                        
                                              'margin-left: auto;'+
                        
                                              'margin-right: auto;'+
                        
                                              'bottom: 0px;'+
                        
                                              'border-right-color: #000;'+
                        
                                              'border-collapse: collapse;'+
                        
                                            '" border="1" cellspacing="0" cellpadding="0">'+
                        
                                          '<tbody>'+
                        
                                            '<tr>'+
                        
                                              '<td rowspan="2" style="width: 20%;">'+
                        
                                                '<img src="http://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width: 50%;" />'+
                        
                                              '</td>'+
                        
                                              '<td colspan="8" style="width: 80%;">'+
                        
                                                '<h2 style="text-align: center; font-size: 25px; font-weight: bold;  ">'+
                        
                                                  'BeatMySugar'+
                        
                                                '</h2>'+
                        
                                                '<p style="text-align: center;">'+
                        
                                                  'Rx Health Management India Pvt Ltd 12th Floor, Puri'+
                        
                                                  '81 Business Hub,'+
                        
                        
                        
                                                  '<br />Sec-81, Faridabad, Haryana - 121 001. INDIA.'+
                        
                                                '</p>'+
                        
                                           ' <tr class="success" style="background-color: #f7f7f7 !important;">'+
                        
                                             ' <td colspan="8" style=" text-align: right; padding-right: 1%; font-weight: bold; font-size: 20px; ">'+
                        
                                               ' Order Form'+
                        
                                             ' </td>'+
                        
                                           ' </tr>'+
                        
                                     ' </td>'+
                        
                                   ' </tr>'+
                        
                        
                        
                                   ' <tr>'+
                        
                                      '<td colspan="1" style=" text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;  ">'+
                        
                                        '<span style="font-weight: bold; font-size: 16px;">Order Date</span>'+
                        
                                     ' </td>'+
                        
                                      '<td colspan="3" style="  text-align: left;  padding-left: 1%; padding-top: 1%;  padding-bottom: 1%; ">'+
                        
                                        'orderdate'+
                        
                                      '</td>'+
                        
                                      '<td colspan="3" style="  text-align: left;  padding-left: 1%;  padding-top: 1%;  padding-bottom: 1%;   ">'+
                        
                                       ' <span style="font-weight: bold; font-size: 16px;">Purchase Order No.</span>'+
                        
                                      '</td>'+
                        
                                     ' <td colspan="4" style="  text-align: left; padding-left: 1%;  padding-top: 1%;   padding-bottom: 1%; ">'+
                        
                                       ' ordernumber'+
                        
                                     ' </td>'+
                        
                                    '</tr>'+
                        
                        
                        
                                    '<tr class="success" style="background-color: #f7f7f7 !important;">'+
                        
                                      '<td colspan="4" style="  padding-top: 1%;   padding-bottom: 1%;   font-weight: bold;   font-size: 15px;    text-align: center;    ">'+
                        
                                        'Billing Address'+
                        
                                      '</td>'+
                        
                                     ' <td colspan="4" style="  padding-top: 1%;   padding-bottom: 1%;   font-weight: bold; font-size: 15px;    text-align: center;  ">'+
                        
                                        'Shipping Address'+
                        
                                      '</td>'+
                        
                                    '</tr>'+
                        
                                    '<tr>'+
                        
                                      '<td colspan="4" style=" text-align: left;  padding-left: 1%;padding-top: 1%; padding-bottom: 1%;">'+
                        
                                        '<span style="font-weight: bold; font-size: 18px;">'+
                        
                                          'billingname'+
                        
                                        '</span>'+
                        
                                       ' <p>'+
                        
                                         ' billingaddress <br />'+
                        
                                          'billingstreet <br />'+
                        
                                          'billingcity billingpincode , billingstate ,'+
                        
                                         ' billingcountry .<br />Landmark: billinglandmark'+
                        
                                          '<br />Mobile Number: ( 91 billingmobile )'+
                        
                                        '</p>'+
                        
                                      '</td>'+
                        
                        
                        
                                      '<td colspan="4" style="'+
                        
                                                    'text-align: left;'+
                        
                                                   ' padding-left: 1%;'+
                        
                                                    'padding-top: 1%;'+
                        
                                                    'padding-bottom: 1%;'+
                        
                                                  '">'+
                        
                                       ' <span style="font-weight: bold; font-size: 18px;">'+
                        
                                          'shippingname'+
                        
                                       ' </span>'+
                        
                                        '<p>'+
                        
                                          'shippingaddress <br />'+
                        
                                         ' shippingstreet <br />'+
                        
                                          'shippingcity shippingpincode , shippingstate ,'+
                        
                                          'shippingcountry .<br />Landmark: shippinglandmark'+
                        
                                         ' <br />Mobile Number: ( 91 shippingmobile )'+
                        
                                       ' </p>'+
                        
                                      '</td>'+
                        
                                   ' </tr>'+
                        
                                 ' </tbody>'+
                        
                                '</table>'+
                        
                        
                        
                                '<table style="'+
                        
                                              'width: 1000px;'+
                        
                                              'text-align: center;'+
                        
                                              'margin-left: auto;'+
                        
                                              'margin-right: auto;'+
                        
                                              'border-right-color: #000;'+
                        
                                             ' border-top: hidden;'+
                        
                                            '" border="1" cellspacing="0" cellpadding="0">'+
                        
                                  '<tbody>'+
                        
                                    '<tr class="success" style="background-color: #f7f7f7 !important;">'+
                        
                                      '<td style="padding-top: 1%;padding-bottom: 1%; text-align: center;">'+
                        
                                        'S.No'+
                        
                                      '</td>'+
                        
                                      '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center; ">'+
                        
                                        'HSN Code'+
                        
                                      '</td>'+
                        
                                      '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center; ">'+
                        
                                        '<span style="font-weight: bold;"> Product</span>'+
                        
                                     ' </td>'+
                        
                                     ' <td style="padding-top: 1%; padding-bottom: 1%;text-align: center;">'+
                        
                                        'Brand'+
                        
                                     ' </td>'+
                        
                                      '<td style=" padding-top: 1%;padding-bottom: 1%;text-align: center;">'+
                        
                                        '<span style="font-weight: bold;">Rate</span>'+
                        
                                      '</td>'+
                        
                        
                        
                                      '<td style="padding-top: 1%;padding-bottom: 1%; text-align: center;">'+
                        
                                        '<span style="font-weight: bold;">Quantity</span>'+
                        
                                      '</td>'+
                        
                                     ' <td style=" padding-top: 1%; padding-bottom: 1%;text-align: center;  ">'+
                        
                                        '<span style="font-weight: bold;">GST %</span>'+
                        
                                      '</td>'+
                        
                                     ' <td style="  padding-top: 1%;   padding-bottom: 1%;     text-align: center;   ">'+
                        
                                       ' <span style="font-weight: bold;">GST Amount</span>'+
                        
                                      '</td>'+
                        
                        
                        
                                      '<td style="    padding-top: 1%;   padding-bottom: 1%;   text-align: center;  ">'+
                        
                                       ' <span style="font-weight: bold;">Total (INR)</span>'+
                        
                                      '</td>'+
                        
                                   ' </tr>'+
                        
                        
                        
                                    '<tr>'+
                        
                                      '<td style="   padding-top: 1%;    padding-bottom: 1%;    text-align: center;   "></td>'+
                        
                                      '<td style="   padding-top: 1%;   padding-bottom: 1%;   text-align: center;  "></td>'+
                        
                                     ' <td style="   padding-top: 1%;   padding-bottom: 1%;      text-align: center; "></td>'+
                        
                                    '  <td style="    padding-top: 1%;  padding-bottom: 1%;   text-align: center;    "></td>'+
                        
                                     ' <td style="  padding-top: 1%; padding-bottom: 1%;  text-align: center;  "></td>'+
                        
                                     ' <td style="padding-top: 1%;   padding-bottom: 1%;text-align: center;  "></td>'+
                        
                                     ' <td style="  padding-top: 1%; padding-bottom: 1%;   text-align: center; "></td>'+
                        
                                      '<td style=" padding-top: 1%;  padding-bottom: 1%;    text-align: center;"></td>'+
                        
                                     ' <td style="      padding-top: 1%;    padding-bottom: 1%;      text-align: center;  "></td>'+
                        
                                    '</tr>'+
                        
                                 ' </tbody>'+
                        
                               ' </table>'+
                        
                        
                        
                               ' <table style=" width: 1000px;   text-align: center; margin-left: auto; margin-right: auto;   border-right-color: #000;  border-top: hidden;'+
                        
                                           ' " border="1" cellspacing="1" cellpadding="0">'+
                        
                                 ' <tbody>'+
                        
                                    '<tr>'+
                        
                                     ' <td rowspan="7" colspan="4" style="text-align: left; padding-left: 1%;">'+
                        
                                        '<span style="font-weight: bold;"> Disclaimer:</span>'+
                        
                                        '<ul style="text-align: left;">'+
                        
                                          '<li>'+
                        
                                            'BMS is only providing a platform between seller'+
                        
                                            'and you'+
                        
                                          '</li>'+
                        
                                          '<li>'+
                        
                                           ' Warranties, If any, on Products are provided by'+
                        
                                            'seller'+
                        
                                          '</li>'+
                        
                                         ' <li>'+
                        
                                            'Disputes are subjected to exclusive jurisdiction'+
                        
                                            'of the courts in Delhi only'+
                        
                                          '</li>'+
                        
                                          '<li>'+
                        
                                            'Please revisit'+
                        
                                           ' <a href="https://beatmysugar.com/">www.beatmysugar.com</a>'+
                        
                                           ' for detailed terms and conditions'+
                        
                                          '</li>'+
                        
                                        '</ul>'+
                        
                        
                        
                                   ' <tr>'+
                        
                                      '<td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                       ' <span style="font-weight: bold;"> Sub total</span>'+
                        
                                      '</td>'+
                        
                                     ' <td style="text-align: right; padding-right: 1%;">'+
                        
                                        '522.00'+
                        
                                      '</td>'+
                        
                                   ' </tr>'+
                        
                                    '<tr>'+
                        
                                     ' <td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                       ' <span style="font-weight: bold;">'+
                        
                                          'Offer Discount'+
                        
                                       ' </span>'+
                        
                                     ' </td>'+
                        
                                     ' <td style="text-align: right; padding-right: 1%;">'+
                        
                                       ' 522.00'+
                        
                                      '</td>'+
                        
                                    '</tr>'+
                        
                        
                        
                                   ' <tr>'+
                        
                                      '<td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                        '<span style="font-weight: bold;">'+
                        
                                          'Shipping Charge'+
                        
                                        '</span>'+
                        
                                      '</td>'+
                        
                                      '<td style="text-align: right; padding-right: 1%;">'+
                        
                                       ' 522.00'+
                        
                                      '</td>'+
                        
                                    '</tr>'+
                        
                                    '<tr>'+
                        
                                     ' <td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                       ' <span style="font-weight: bold;">'+
                        
                                         ' COD Service Charge'+
                        
                                       ' </span>'+
                        
                                      '</td>'+
                        
                                      '<td style="text-align: right; padding-right: 1%;">'+
                        
                                        '522.00'+
                        
                                      '</td>'+
                        
                                    '</tr>'+
                        
                        
                        
                                    '<tr>'+
                        
                                      '<td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                        '<span style="font-weight: bold;">'+
                        
                                          'Total (Inclusive of all Taxes)'+
                        
                                       ' </span>'+
                        
                                      '</td>'+
                        
                                      '<td style="text-align: right; padding-right: 1%;">'+
                        
                                        '522.00'+
                        
                                      '</td>'+
                        
                                   ' </tr>'+
                        
                        
                        
                                   ' <tr>'+
                        
                                     ' <td colspan="4" style="text-align: right; padding: 1%;">'+
                        
                                       ' <span style="font-weight: bold;">'+
                        
                                         ' Payment Mode'+
                        
                                        '</span>'+
                        
                                      '</td>'+
                        
                                     ' <td style="text-align: right; padding-right: 1%;">'+
                        
                                        'COD'+
                        
                                     ' </td>'+
                        
                                    '</tr>'+
                        
                              '</td>'+
                        
                            '</tr>'+
                        
                        
                        
                            '<tr>'+
                        
                              '<th colspan="10" style=" padding-top: 1%;padding-bottom: 1%;text-align: center; ">'+
                        
                                'Have a Question? Call us on 91 90244 22444 or Email us'+
                        
                               ' at wecare@beatmysugar.com'+
                        
                             ' </th>'+
                        
                          '  </tr>'+
                        
                        
                        
                           ' <tr class="success" style="background-color: #f7f7f7 !important;">'+
                        
                             ' <th colspan="10" style=" padding-top: 1%; padding-bottom: 1%; text-align: center;  background: #f7f7f7; ">'+
                        
                               ' Visit us at'+
                        
                               ' <a href="https://beatmysugar.com/">www.beatmysugar.com</a>'+
                        
                              '</th>'+
                        
                            '</tr>'+
                        
                           ' </tbody>'+
                        
                          '</table>'+
                        

                        
                          '<table>'+
                        
                            '<tbody>'+
                        
                              '<tr>'+
                        
                               ' <td style="padding-bottom: 15px; padding-top: 10px;">'+
                        
                                 ' We"ll let you know once your order has been verified.'+
                        
                                '</td>'+
                        
                              '</tr>'+
                        
                              '<tr>'+
                        
                               ' <td style="padding-bottom: 15px;">'+
                        
                                 ' Stay Healthy'+
                        
                               ' </td>'+
                        
                             ' </tr>'+
                        
                            '</tbody>'+
                        
                          '</table>'+
                        
                          '</td>'+
                        
                          '</tr>'+
                        
                          '<tr>'+
                        
                            '<td style="width: 100%; background: #f6f6f6; padding: 5px 20px;" colspan="2">'+
                        
                              '<table style=" font-size: 13px;font-size: 13px;  text-align: center; " width="100%">'+
                        
                                '<tr>'+
                        
                                 ' <td style="padding-bottom: 5px;">'+
                        
                                   ' Team <b>BeatMySugar</b>'+
                        
                                 ' </td>'+
                        
                               ' </tr>'+
                        
                               ' <tr>'+
                        
                                 ' <td style="padding-bottom: 5px;">'+
                        
                                    '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width: 50px;" />'+
                        
                                  '</td>'+
                        
                                '</tr>'+
                        
                                '<tr>'+
                        
                                  '<td style="padding-bottom: 5px;">'+
                        
                                  '  +91-90244-22444 | wecare@beatmysugar.com'+
                        
                                 ' </td>'+
                        
                               ' </tr>'+
                        
                                '<tr>'+
                        
                                  '<td></td>'+
                        
                                '</tr>'+
                        
                             ' </table>'+
                        
                            '</td>'+
                        
                         ' </tr>'+
                        
                         ' </tbody>'+
                        
                          '</table>'+
                        
                         ' </td>'+
                        
                          '</tr>'+
                        
                         ' </table>'+
                        
                        '</body>'+
                        
                       ' </html>'


                                         //===========OLD-=========
//                         '<html>'+
//     '<head>'+

//    ' </head>'+
//     '<body>'+
//         '<table width="100%" style="font-family: Lato, sans-serif;'+

//         '" cellpadding="0" cellspacing="0" width="100%">'+
//            ' <tr>'+
//                 '<td>'+
//                     '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px;border:1px solid #e8e8e8">'+
//                         '<tbody>'+
//                             '<tr style="background:#fff;padding:10px;border-bottom:1px solid #000">'+
//                                 '<td style="padding:10px">'+
//                                     '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png">'+
//                                 '</td>'+
//                                 '<td>'+
//                                    '<table style="float:right;margin-right:10px">'+
//                                        '<tr style="text-align: right;">'+
//                                            '<td><img src="fb.png" style="width:30px"></td>'+
//                                            '<td><img src="insta.png" style="width:30px"></td>'+
//                                            '<td><img src="twitter.png" style="width:30px"></td>'+
//                                            '<td><img src="linkedin.png" style="width:30px"></td>'+
//                                        '</tr>'+
//                                    '</table>'+
//                                 '</td>'+
//                             '</tr>'+

//                             '<tr>'+
//                                 '<td style="background:#fff;padding:20px 20px 10px;border-top:1px solid #fef1f1" with="100%">'+
//                                    ' <table style="font-size:14px" >'+
//                                         '<tbody>'+
//                                         '<tr>'+
//                                             '<td style="padding-bottom: 15px;">'+
//                                                ' Hi <b>Saravan,</b>'+
//                                             '</td>'+
//                                        ' </tr>'+
//                                        ' <tr>'+
//                                             '<td style="padding-bottom: 5px;">'+
//                                                ' We"re so glad you chose to shop with <b>BeatMySugar</b>.'+
//                                            ' </td>'+
//                                        ' </tr>'+
//                                         '<tr>'+
//                                             '<td style="padding-bottom: 15px;">  Your Order - <b>Order Number </b>has been successfully placed.</td>'+
//                                        ' </tr>'+
                                        
//                                        ' <tr>'+
//                                            ' <td>'+
//                                                 '<table style="font-size:13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
//                                                ' #000; border-collapse: collapse;margin-bottom:0px;font-size: 13px;" border="1" cellspacing="0" cellpadding="0">'+
//                                              '<tbody>'+
//                                                        '<tr>'+
//                                                            '<td colspan="2" style="width:20%;vertical-align:middle"><img src="http://www.beatmysugar.com/assets/images/bms-logo.png" style="width: 50%;margin-right:auto;margin-left:auto; vertical-align: middle"/> </td>'+
//                                                            '<td colspan="8" style="width:80%"> <h2 style="text-align: center; font-size: 20px; font-weight: bold">'+
                                                            
                                                            
//                                                              'BeatMySugar</h2><p style="text-align: center"}}>Rx Health Management India Pvt Ltd'+
                                        
//                                         '12th Floor, Puri 81 Business Hub,'+
                                        
//                                         '<br/>Sec-81, Faridabad,'+
                                        
//                                         'Haryana - 121 001. INDIA.</p>'+
//                                                                   '<tr rowspan="8" class="success" style="width:100%">'+
//                                                                  '<td colspan="2" style="border-top:none"></td>  '+
//                                                                '<td colspan="8" style="text-align: right; padding-right: 1%;font-weight: bold;font-size: 16px;width:100%">'+
//                                                                   ' Order Form</td></tr></td>'+
//                                                        '</tr>'+
                                        
                                                             
//                                                       ' <tr style="text-align:center"}}>'+ 
//                                                          '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
//                                                                '<span style="font-weight: bold; font-size: 14px">Order Date</span></td>'+
//                                                          '<td colspan="2" style="text-align: left;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;text-align:center">'+
//                                                            '{moment().format(ll)}</td>'+
//                                                          '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
//                                                                '<span style="font-weight: bold;font-size: 14px">Purchase Order No.</span>'+
//                                                                '</td>'+
//                                                          ' <td colspan="2" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">ordernumber+</td> '+
                                        
//                                                      '  </tr> '+                 
                                        
                                        
//                                                       ' <tr class="success">'+
//                                                            '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Billing '+
//                                                           ' Address</td>'+
//                                                          '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Shipping Address</td>'+
//                                                      ' </tr>'+
//                                                        '<tr>'+
//                                                          '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; padding-left:1% ">'+
//                                                        ' <span style="font-weight: bold; font-size: 15px">{this.state.BillingAddress.fld_name}</span><p>{this.state.BillingAddress.fld_address}'+
//                                                                '<br/>{this.state.BillingAddress.fld_street}<br/>{this.state.BillingAddress.fld_city} {this.state.BillingAddress.fld_pincode}, {this.state.BillingAddress.fld_state}, {this.state.BillingAddress.fld_country}.<br/>Landmark: {this.state.BillingAddress.fld_landmark}'+
//                                                               '<br/>Mobile Number: ( +91 {this.state.BillingAddress.fld_mobile})</p></td>'+
                                        
//                                                               '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; font-size: 15px;text-align:center">'+
//                                                               '<span style="font-weight: bold; font-size: 15px">{this.state.ShippingAddress.fld_name}</span><p style="font-size:13px">{this.state.ShippingAddress.fld_address}'+
//                                                               '<br/>{this.state.ShippingAddress.fld_street}<br/>{this.state.ShippingAddress.fld_city} {this.state.ShippingAddress.fld_pincode}, {this.state.ShippingAddress.fld_state}, {this.state.ShippingAddress.fld_country}.<br/>Landmark: {this.state.ShippingAddress.fld_landmark}'+
//                                                              '<br/>Mobile Number: ( +91 {this.state.ShippingAddress.fld_mobile})</p></td>'+
//                                                        '</tr>'+
                                        
//                                                    '</tbody>'+
//                                               ' </table>'+

                                                
                                                      
//                                             '</td>'+
//                                         '</tr>'+
//                                         '<tr>'+
//                                            ' <td>'+
//                                                 '<table style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
//                                                ' #000; border-collapse: collapse;margin-bottom:0px;word-break: break-all" border="1" cellspacing="0" cellpadding="0">'+
//                                           '<tbody>'+
                                                    
                                               
//                                           '<tr class="success">'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold"> '+
//                                           'S.No</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">HSN Code</span></td>'+
                            
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold;"}}> '+
//                                           'Product</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold"> '+
//                                          ' Brand</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">Quantity</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">Rate</span></td>'+
//                                          ' <td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">GST %</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">GST Amount</span></td>'+
//                                           '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span style="font-weight: bold">Total (INR)</span></td>'+
                                     
//                                           '</tr>'+
                                    
                            
//                             '<tr>'+
//                                 '<td>{index+1}.</td>'+
//                                 '<td>{info.fld_hsncode}</td>'+
//                                 '<td >{info.fld_name}<br/>{info.fld_productweight+" "+info.fld_productunit}</td>'+
//                                 '<td>{info.fld_brand}</td>'+
//                                 '<td>{info.fld_quantity}</td>'+
//                                 '<td>&#8377; {info.fld_discountprice}</td>'+
//                                 '<td>{info.fld_gstpercent}%</td>'+
//                                  '<td></td>'+
//                                ' <td> &#8377; {parseFloat(info.fld_quantity*info.fld_discountprice).toFixed(2)}</td>'+
                                 
//                              ' </tr>'+
                                
                              
                                        
                                     
//                                                 '</tbody>'+
//                                            ' </table>'+
                                     
                                           
//                                            ' </td>'+
//                                        ' </tr>'+

//                                       ' <tr>'+
//                                            '<td>'+
//                                             '<table style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
//                                             '#000; border-collapse: collapse;margin-bottom:0px;word-break: break-all" border="1" cellspacing="0" cellpadding="0">'+
//                                          ' <tbody>'+
                                     
//                                                     '<tr>'+
//                                                       '<td  style="text-align: left; padding-left: 1%;padding-top:1%;padding-right:1%;vertical-align: top;"><span style="font-weight: bold"> '+
//                                                         'Disclaimer:</span>'+
//                                                         '<ul style="text-align: left;margin-left:5px;padding-left:10px">'+
                                                          
                                                        
//                                                           '<li>BMS is only providing a platform between seller and you</li>'+
//                                                           '<li>Warranties, If any, on Products are provided by seller</li>'+
//                                                          ' <li>Disputes are subjected to exclusive jurisdiction of the courts in Delhi only</li>'+
//                                                           '<li>Please revisit <a href="https://www.beatmysugar.com/" style={{fontWeight:600}}>www.beatmysugar.com</a> for detailed terms and conditions</li>'+
//                                                         '</ul>'+
                                                        
                                                      
                                                                       
//                                                       '</td>'+
//                                                       '<td>'+
//                                                         '<table style="font-size: 13px;border-collapse: collapse;margin-bottom:0px;word-break: break-all" border="1" cellspacing="0" cellpadding="0">'+
//                                                          ' <tr >'+
//                                                           '<td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                            'Sub total</span></td><td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.SubTotalAmt}'+
//                                                            ' </td>'+
                                                            
//                                                          ' </tr>'+
//                                                          ' <tr style="width:100%;">'+
//                                                           '<td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                            'Offer Discount</span></td><td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.OfferAmt}'+
//                                                             '</td>'+
                                                            
//                                                           '</tr>'+
//                                                          ' <tr style="width:100%;">'+
//                                                          ' <td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                           ' Shipping Charge</span></td><td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.ShippngAmt}'+
//                                                             '</td>'+
                                                            
//                                                          ' </tr>'+
                                                          
//                                                          ' <tr style="width:100%;">'+
//                                                           '<td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                            'COD Service Charge</span></td><td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.CodAmt}'+
//                                                            ' </td>'+
                                                            
//                                                          ' </tr>'+
                                                         
//                                                           '<tr style="width:100%;">'+
//                                                           '<td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                            'Total (Inclusive of all Taxess)</span></td><td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.TotalAmt}'+
//                                                             '</td>'+
                                                            
//                                                           '</tr>'+
//                                                           '<tr style="width:100%;">'+
//                                                           '<td  style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                           'Payment Mode</span></td><td style="text-align: right; padding-right: 1%;width:20%">{this.state.SummaryData.CodAmt == 0 ? Online : COD}'+
//                                                             '</td>'+
                                                            
//                                                           '</tr>'+
//                                                           '<tr style="width:100%;">'+
//                                                       '<td colspan="2" style="padding-top: 1%; padding-bottom: 1%; text-align: center">Have a Question? Call us on '+
//                                                       '+91 90244 22444 or Email us at wecare@beatmysugar.com</td>'+
//                                                     '</tr>'+
//                                                     '<tr class="success" style="width:100%;">'+
//                                                     '<td colspan="2" style="padding-top: 1%; padding-bottom: 1%; text-align: center;background:#f7f7f7">Visit'+
//                                                          'us at <a href="https://www.beatmysugar.com/" style="font-weight:600">www.beatmysugar.com</a></td>'+
//                                                     '</tr>'+
//                                                      ' </td>'+
//                                                     '</table>'+
//                                            '</td>'+
//                                        '</tr>'+
                                        
                                       
//                                        '</tbody>'+
//                                     '</table>'+
//                                     '<table>'+
//                                        ' <tbody>'+
//                                     '<tr>'+
//                                         '<td style="padding-bottom: 15px;padding-top:10px">'+
//                                            ' We"ll let you know once your order has been verified.'+
//                                         '</td>'+
//                                     '</tr>'+
//                                     '<tr>'+
//                                        ' <td style="padding-bottom: 15px;">'+
//                                            ' Stay Healthy'+
//                                         '</td>'+
//                                     '</tr>'+
//                                ' </tbody>'+
//                                ' </table>'+
//                                ' </td>'+

//                            ' </tr>'+
//                             '<tr>'+
//                                 '<td style="width:100%;background: #f6f6f6;'+
//                                ' padding: 5px 20px;" colspan="2">'+
//                                     '<table style="font-size:13px;    font-size: 13px;text-align: center;'+
//                                    ' " width="100%">'+
//                                         '<tr>'+
//                                             '<td style="padding-bottom: 5px;">'+
//                                                ' Team <b>BeatMySugar</b>'+
//                                             '</td>'+
//                                        ' </tr>'+
//                                         '<tr>'+
//                                             '<td style="padding-bottom: 5px;">'+
//                                                ' <img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width:50px;">'+
//                                            ' </td>'+
//                                         '</tr>'+
//                                        ' <tr>'+
//                                             '<td style="padding-bottom: 5px;">'+
//                                                 '+91-90244-22444 | wecare@beatmysugar.com'+
//                                             '</td>'+
//                                         '</tr>'+
//                                         '<tr>'+
//                                             '<td>'+
                                               
//                                             '</td>'+
//                                         '</tr>'+
//                                     '</table>'+
//                                ' </td>'+
//                             '</tr>'+
//                        ' </tbody>'+
//                     '</table>'+
//                ' </td>'+
//            ' </tr>'+
//         '</table>'+
//     '</body>'+
// '</html>'

//                         '<html>'+
// '<head>'+

//     '</head>'+
// '<body>'+
//     '<table width="100%" style="font-family: Lato, sans-serif;" cellpadding="0" cellspacing="0" width="100%">'+
//         '<tr>'+
//             '<td>'+
//                ' <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"style="max-width: 650px;border:1px solid #e8e8e8">'+
//                     '<tbody>'+
//                         '<tr style="background:#fff;padding:10px;border-bottom:1px solid #000">'+
//                             '<td style="padding:10px">'+
//                                 '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png">'+
//                             '</td>'+
//                             '<td>'+
//                                 '<table style="float:right;margin-right:10px">'+
//                                     '<tr style="text-align: right;">'+
//                                        ' <td><img src="fb.png" style="width:30px"></td>'+
//                                         '<td><img src="insta.png" style="width:30px"></td>'+
//                                        ' <td><img src="twitter.png" style="width:30px"></td>'+
//                                         '<td><img src="linkedin.png" style="width:30px"></td>'+
//                                     '</tr>'+
//                                 '</table>'+
//                            ' </td>'+
//                         '</tr>'+

//                         '<tr>'+
//                             '<td style="background:#fff;padding:20px 20px 10px;border-top:1px solid #fef1f1" colspan="2">'+
//                                ' <table style="font-size:14px">'+
//                                     '<tr>'+
//                                         '<td style="padding-bottom: 15px;">Hi <b>Saravan,</b>'+
//                             '</td>'+
//                                     '</tr>'+
//                                     '<tr>'+
//                                        ' <td style="padding-bottom: 5px;">We"re so glad you chose to shop with <b>BeatMySugar</b>.'+
//                                         '</td>'+
//                                     '</tr>'+
//                                    ' <tr>'+
//                                         '<td style="padding-bottom: 15px;"> Your Order - <b>Order Number </b>has been successfully placed.</td>'+
//                                    ' </tr>'+

//                                     '<tr>'+
//                                         '<td>'+
//                                             '<table style="font-size:13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color: #000; border-collapse: collapse;margin-bottom:0px;font-size: 13px;"border="1" cellspacing="0" cellpadding="0">'+
//                                                 '<tbody>'+
//                                                     '<tr>'+
//                                                         '<td colspan="2" style="width:20%;vertical-align:middle"><img src="http://www.beatmysugar.com/assets/images/bms-logo.png" style="width: 50%;margin-right:auto;margin-left:auto; vertical-align: middle" />'+
//                                                         '</td>'+
//                                                         '<td colspan="8" style="width:80%">'+
//                                                            ' <h2 style="text-align: center; font-size: 20px; font-weight: bold">BeatMySugar</h2>'+
//                                                             '<p style="text-align: center" }}>Rx Health Management India Pvt Ltd 12th Floor, Puri 81 Business Hub,<br />Sec-81, Faridabad, Haryana - 121 001. INDIA.</p>'+
//                                                     '<tr rowspan="8" class="success" style="width:100%">'+
//                                                         '<td colspan="2" style="border-top:none"></td>'+
//                                                         '<td colspan="8" style="text-align: right; padding-right: 1%;font-weight: bold;font-size: 16px;width:100%">Order Form</td>'+
//                                                     '</tr>'+
//                                         '</td>'+
//                                     '</tr>'+


//                                     '<tr style="text-align:center" }}>'+
//                                         '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
//                                             '<span style="font-weight: bold; font-size: 14px">Order Date</span></td>'+
//                                        ' <td colspan="2" style="text-align: left;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;text-align:center">'+
//                                             '{moment().format(ll)}</td>'+
//                                         '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
//                                             '<span style="font-weight: bold;font-size: 14px">Purchase Order No.</span>'+
//                                         '</td>'+
//                                         '<td colspan="2" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center"> ordernumber+</td>'+

//                                    ' </tr>'+


//                                     '<tr class="success">'+
//                                         '<td colspan="5"'+
//                                             'style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">'+
//                                             'Billing'+
//                                             'Address</td>'+
//                                         '<td colspan="5"'+
//                                             'style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">'+
//                                            ' Shipping Address</td>'+
//                                    ' </tr>'+
//                                    ' <tr>'+
//                                         '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; padding-left:1% ">'+
//                                             '<span'+
//                                                 'style="font-weight: bold; font-size: 15px">{this.state.BillingAddress.fld_name}</span>'+
//                                            ' <p>{this.state.BillingAddress.fld_address}'+
//                                                 '<br />{this.state.BillingAddress.fld_street}<br />{this.state.BillingAddress.fld_city}'+
//                                                ' {this.state.BillingAddress.fld_pincode},'+
//                                                ' {this.state.BillingAddress.fld_state},'+
//                                                ' {this.state.BillingAddress.fld_country}.<br />Landmark:'+
//                                                ' {this.state.BillingAddress.fld_landmark}'+
//                                                 '<br />Mobile Number: ( +91 {this.state.BillingAddress.fld_mobile})</p>'+
//                                        ' </td>'+

//                                         '<td colspan="5"'+
//                                            ' style="padding-top: 1%; padding-bottom: 1%; font-size: 15px;text-align:center">'+
//                                             '<span'+
//                                                 'style="font-weight: bold; font-size: 15px">{this.state.ShippingAddress.fld_name}</span>'+
//                                             '<p style="font-size:13px">{this.state.ShippingAddress.fld_address}'+
//                                                 '<br />{this.state.ShippingAddress.fld_street}<br />{this.state.ShippingAddress.fld_city}'+
//                                                 '{this.state.ShippingAddress.fld_pincode},'+
//                                                 '{this.state.ShippingAddress.fld_state},'+
//                                                 '{this.state.ShippingAddress.fld_country}.<br />Landmark:'+
//                                                 '{this.state.ShippingAddress.fld_landmark}'+
//                                                 '<br />Mobile Number: ( +91 {this.state.ShippingAddress.fld_mobile})</p>'+
//                                         '</td>'+
//                                     '</tr>'+

//                     '</tbody>'+
//                 '</table>'+
//                 '<table'+
//                     'style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
//                                                    '#000; border-collapse: collapse;margin-bottom:0px;word-break: break-all"'+
//                     'border="1" cellspacing="0" cellpadding="0">'+
//                     '<tbody>'+


//                         '<tr class="success">'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                    ' style="font-weight: bold">'+
//                                     'S.No</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold">HSN Code</span></td>'+

//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold;" }}>'+
//                                    ' Product</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                    ' style="font-weight: bold">'+
//                                    ' Brand</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                    ' style="font-weight: bold">Quantity</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold">Rate</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold">GST %</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold">GST Amount</span></td>'+
//                             '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
//                                     'style="font-weight: bold">Total (INR)</span></td>'+

//                        ' </tr>'+


//                         '<tr>'+
//                             '<td>{index+1}.</td>'+
//                             '<td>{info.fld_hsncode}</td>'+
//                             '<td>{info.fld_name}<br />{info.fld_productweight+" "+info.fld_productunit}</td>'+
//                             '<td>{info.fld_brand}</td>'+
//                             '<td>{info.fld_quantity}</td>'+
//                             '<td>&#8377; {info.fld_discountprice}</td>'+
//                             '<td>{info.fld_gstpercent}%</td>'+
//                             '<td></td>'+
//                             '<td> &#8377; {parseFloat(info.fld_quantity*info.fld_discountprice).toFixed(2)}</td>'+

//                         '</tr>'+




//                     '</tbody>'+
//                 '</table>'+
//                 '<table style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
//                                                '#000; border-collapse: collapse;margin-bottom:0px;word-break: break-all"'+
//                    ' border="1" cellspacing="0" cellpadding="0">'+
//                     '<tbody>'+

//                         '<tr>'+
//                             '<td style="text-align: left; padding-left: 1%;padding-top:1%;padding-right:1%;vertical-align: top;">'+
//                                 '<span style="font-weight: bold"> Disclaimer:</span>'+
//                                 '<ul style="text-align: left;margin-left:5px;padding-left:10px">'+


//                                     '<li>BMS is only providing a platform between seller and you</li>'+
//                                     '<li>Warranties, If any, on Products are provided by seller</li>'+
//                                     '<li>Disputes are subjected to exclusive jurisdiction of the courts in Delhi only  </li>'+
//                                     '<li>Please revisit <a href="https://www.beatmysugar.com/" style={{fontWeight:600}}>www.beatmysugar.com</a> for detailed terms and conditions</li>'+
//                                 '</ul>'+



//                             '</td>'+
//                             '<td>'+
//                                ' <table style="font-size: 13px;border-collapse: collapse;margin-bottom:0px;word-break: break-all" border="1" cellspacing="0" cellpadding="0">'+
//                                     '<tr>'+
//                                        ' <td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Sub total</span></td>'+
//                                         '<td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.SubTotalAmt} </td>'+

//                                    ' </tr>'+
//                                    ' <tr style="width:100%;">'+
//                                         '<td style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
//                                                 'Offer Discount</span></td>'+
//                                         '<td style="text-align: right; padding-right: 1%;width:40%"> &#8377;'+
//                                             '{this.state.SummaryData.OfferAmt}'+
//                                         '</td>'+

//                                     '</tr>'+                                   
//                                      '<tr style="width:100%;">'+
//                                         '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Shipping Charge</span></td>'+
//                                         '<td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.ShippngAmt}  </td>'+

//                                     '</tr>'+

//                                     '<tr style="width:100%;">'+
//                                         '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> COD Service Charge</span></td>'+
//                                         '<td style="text-align: right; padding-right: 1%;width:40%"> &#8377; {this.state.SummaryData.CodAmt}  </td>'+

//                                     '</tr>'+

//                                     '<tr style="width:100%;">'+
//                                         '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Total (Inclusive of all Taxess)</span></td>'+
//                                        ' <td style="text-align: right; padding-right: 1%;width:40%"> &#8377;  {this.state.SummaryData.TotalAmt} </td>'+

//                                     '</tr>'+
//                                     '<tr style="width:100%;">'+
//                                         '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Payment Mode</span></td>'+
//                                         '<td style="text-align: right; padding-right: 1%;width:20%"> {this.state.SummaryData.CodAmt == 0 ? Online : COD} </td>'+

//                                     '</tr>'+
//                                     '<tr style="width:100%;">'+
//                                         '<td colspan="2" style="padding-top: 1%; padding-bottom: 1%; text-align: center"> Have a Question? Call us on  +91 90244 22444 or Email us at wecare@beatmysugar.com</td>'+
//                                     '</tr>'+
//                                     '<tr class="success" style="width:100%;">'+
//                                         '<td colspan="2"'+
//                                             'style="padding-top: 1%; padding-bottom: 1%; text-align: center;background:#f7f7f7"> Visit us at <a href="https://www.beatmysugar.com/"'+
//                                                 'style="font-weight:600">www.beatmysugar.com</a></td>'+
//                                     '</tr>'+
//                             '</td>'+
//                 '</table>'+

//            ' </td>'+
//         '</tr>'+





//     '</table>'+
//     '<tr>'+
//         '<td style="padding-bottom: 15px;padding-top:10px"> We"ll let you know once your order has been verified. </td>'+
//    ' </tr>'+
//    ' <tr>'+
//         '<td style="padding-bottom: 15px;">Stay Healthy </td>'+
//     '</tr>'+


//     '</td>'+

//     '</tr>'+
//     '<tr>'+
//         '<td style="width:100%;background: #f6f6f6; padding: 5px 20px;" colspan="2">'+
//             '<table style="font-size:13px;    font-size: 13px;text-align: center;" width="100%">'+
//                 '<tr>'+
//                     '<td style="padding-bottom: 5px;"> Team <b>BeatMySugar</b> </td>'+
//                 '</tr>'+
//                 '<tr>'+
//                     '<td style="padding-bottom: 5px;">'+
//                         '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width:50px;">'+
//                    ' </td>'+
//                ' </tr>'+
//                 '<tr>'+
//                     '<td style="padding-bottom: 5px;">  +91-90244-22444 | wecare@beatmysugar.com </td>'+
//                 '</tr>'+
//                 '<tr>'+
//                     '<td>'+

//                    ' </td>'+
//                 '</tr>'+
//             '</table>'+
//         '</td>'+
//     '</tr>'+
//    ' </tbody>'+
//    ' </table>'+
//     '</td>'+
//    ' </tr>'+
//     '</table>'+
// '</body>'+

// '</html>'
                        
                    //    ' <!doctype html/>'+
        
                    //    ' <html>'+
                        
                    //     ' <head>'+
                    //        '<style>'+
                    //   '  tr.success td {-webkit-print-color-adjust: exact;background-color: #f7f7f7 !important;}'+
                    //     'tr.success th {-webkit-print-color-adjust:exact;background-color: #f7f7f7 !important;}'+
                    //     'body{bacbackground-color: white!important;}'+
                    //    ' @media only screen and (max-width: 1024px) and (min-width: 360px) {'+
                           
                    //        'body{overflow:scroll}}'+
                        
                    //   '  tr.danger td {background-color: #f7f7f7 !important;-webkit-print-color-adjust: exact;}'+
                    //     '</style>'+
                    //        '<title>BeatMySugar</title>'+
                    //      '</head>'+
                         
                    // '     <body style="text-align: center;">'+
                    //        '<table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
                    //            ' #000; border-collapse: collapse;" border="1" cellspacing="0" cellpadding="0">'+
                    //          '<tbody>'+
                    //                    '<tr>'+
                    //                        '<td rowspan="2" style="width:20%"><img src=http://www.beatmysugar.com/assets/images/bms-logo.png style="width: 50%;"/> </td>'+
                    //                        '<td colspan="8" style="width:80%"> <h2 style="text-align: center; font-size: 25px; font-weight: bold;">'+
                    //                        ' BeatMySugar</h2><p style="text-align: center;">Rx Health Management India Pvt Ltd'+
                        
                    //     '12th Floor, Puri 81 Business Hub,'+
                        
                    //     '<br/>Sec-81, Faridabad,'+
                        
                    //     'Haryana - 121 001. INDIA.</p>'+
                    //                               '<tr class="success">'+
                    //                           ' <td colspan="8" style="text-align: right; padding-right: 1%; font-weight: bold; font-size: 20px; ">'+
                    //                                'Order Form</td></tr></td>'+
                    //                    '</tr>'+
                        
                                             
                    //                    '<tr>'+
                    //                      '<td colspan="1" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                    //                           ' <span style="font-weight: bold; font-size: 16px;">Order Date</span></td>'+
                    //                      '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                    //                            orderdate+'</td>'+
                    //                      '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                    //                            '<span style="font-weight: bold; font-size: 16px;">Purchase Order No.</span></td>'+
                    //                      '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+ordernumber+'</td>'+
                        
                    //                    '</tr>'         +            
                        
                        
                    //                   ' <tr class="success">'+
                    //                       ' <td colspan="4" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Billing '+
                    //                        'Address</td>'+
                    //                      '<td colspan="4" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Shipping Address</td>'+
                    //                   '</tr>'+
                    //                    '<tr>'+
                    //                      '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                    //                            '<span style="font-weight: bold; font-size: 18px;">'+billingname+'</span><p>'+billingaddress+
                    //                            '<br/>'+billingstreet+'<br/>'+billingcity+' '+billingpincode+', '+billingstate+', '+billingcountry+'.<br/>Landmark: '+billinglandmark+
                    //                           '<br/>Mobile Number: ( +91 '+billingmobile+')</p></td>'+
                        
                    //                           '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                    //                           '<span style="font-weight: bold; font-size: 18px;">'+shippingname+'</span><p>'+shippingaddress+
                    //                           '<br/>'+shippingstreet+'<br/>'+shippingcity+' '+shippingpincode+', '+shippingstate+', '+shippingcountry+'.<br/>Landmark: '+shippinglandmark+
                    //                          '<br/>Mobile Number: ( +91 '+shippingmobile+')</p></td>'+
                    //                   ' </tr>'+
                        
                    //                '</tbody>'+
                    //            '</table>'+
                    //              '  <table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color:'+
                    //                    ' #000; border-top: hidden;" border="1" cellspacing="0" cellpadding="0">'+
                    //          '<tbody>'+
                                       
                                  
                    //         ' <tr class="success">'+
                    //          '<td colspan="3" style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;"> '+
                    //        '  Product</span></td>'+
                    //          '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Quantity</span></td>'+
                    //         ' <td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Rate</span></td>'+
                    //         ' <td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">GST %</span></td>'+
                    //          '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Total (INR)</span></td>'+
                        
                    //         ' </tr>'+
                       
                    // data+
                                
                        
                    //                '</tbody>'+
                    //            '</table>'+
                        
                    //           ' <table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color: #000; '+
                    //            'border-top: hidden;" border="1" cellspacing="1" cellpadding="0">'+
                    //          '<tbody>'+
                        
                    //                   ' <tr>'+
                    //                      '<td rowspan="5" colspan="4" style="text-align: left; padding-left: 1%;"><span style="font-weight: bold;"> '+
                    //                       ' Note:</span>'+
                    //                        '<ul style="text-align: left;">'+
                                             
                                           
                    //                          '<li>Delivery Date Will be given on Confirmation<br/>of Order</li>'+
                    //                        '</ul>'+
                                           
                                         
                    //                       ' <tr><td colspan="4" style="text-align: right; padding: 1%;"><span style="font-weight: bold;">'+
                    //                           ' Total Amount (Inclusive of all Taxes)</span></td><td style="text-align: right; padding-right: 1%;">'+total+
                    //                        '    </td></tr>   '                  +
                    //                    '  </td>'+
                        
                    //                    '</tr>'+
                        
                        
                                    
                        
                    //                    '<tr>'+
                    //                      '<th colspan="10" style=" padding-top: 1%; padding-bottom: 1%; text-align: center;">Have a Question? Call us on '+
                    //                     ' +91 90244 22444 or Email us at wecare@beatmysugar.com</th>'+
                    //                    '</tr>'+
                        
                    //                   ' <tr class="success">'+
                    //                   ' <th colspan="10" style="padding-top: 1%; padding-bottom: 1%; text-align: center; background: #f7f7f7;">Visit'+
                    //                         'us at www.beatmysugar.com</th>'+
                    //                    '</tr>'+
                                       
                    //               ' </tbody>'+
                    //        '</table>'+
                    //     ' </body>'+
                    //     '</html>'
                        
                        
                    
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


 