const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
   
    var paymentid = request.body.paymentid;
    var refundAmount = request.body.refundAmount;
    var refundType = request.body.refundType;
    var merchantId = request.body.merchantId;
    var merchantAmount = request.body.merchantAmount;
    var aggregatorAmount = request.body.aggregatorAmount;

    console.log(request.body)

// console.log('https://test.payumoney.com/payment/payment/addPaymentSplit?merchantKey=tXjTgO&merchantTransactionId='+merchantTransactionId+'&totalAmount='+totalAmount+'&totalDiscount='+totalDiscount+'&jsonSplits='+JSON.stringify(jsonSplits))


    try{
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://www.payumoney.com/payment/refund/refundPayment?paymentId='+paymentid+'&refundAmount='+refundAmount+'&refundType='+refundType+'&merchantId='+merchantId+'&merchantAmount='+merchantAmount+'&aggregatorAmount='+aggregatorAmount
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
            var data = JSON.parse(response1.body)
            if(data.status == -1)
            {
              response.status(400).json({
                data: 'Error'
            });

            }else{
              response.status(200).json({
                data: 'Success'
            });
            }
           
          }
        })

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;