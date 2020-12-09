const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var merchantid = request.body.merchantid;
    var paymentid = request.body.paymentid;
    var orderid = request.body.orderid;
    var settleon = request.body.settleon;

    // console.log(request.body)

// console.log('https://test.payumoney.com/payment/payment/addPaymentSplit?merchantKey=tXjTgO&merchantTransactionId='+merchantTransactionId+'&totalAmount='+totalAmount+'&totalDiscount='+totalDiscount+'&jsonSplits='+JSON.stringify(jsonSplits))

    try{
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://www.payumoney.com/payment/merchant/releasePayment?paymentId='+paymentid+'&merchantId='+merchantid
          ,
          'headers': {
            'Authorization': 'hvPywSWTyJA3kw3kJcHlTETNpHZJpkz8DC73BSGsUc8='
          },
          formData: {
        
          }
        };
        request(options, function (error, response1) {
          // if (error) throw new Error(error);
          console.log(response1.body);
          if(error){
            response.status(404);
            response.send(error);
          }else
          {
            const req = new sql.Request(dbConnection);

            req.input('orderid',sql.Int, orderid);
            req.input('settlestatus',sql.NVarChar(50), 'Released');
            req.input('settledon',sql.NVarChar(100), settleon);

            req.execute("dbo.Add_OrderSettleStatus", function(err, data){
              if(err){
                  console.log("Error while executing the SP - [error] " + err);
                  response.status(404).json({
                      data:err.message
                  });
                
                  
              }else{

                response.status(200).json({
                  data: 'Success'
              });
            }
                });
              

              }
            })
           
          
        

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;