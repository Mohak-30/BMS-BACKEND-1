const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var merchantTransactionId = request.body.merchantTransactionId;
    var totalAmount = request.body.totalAmount;
    var totalDiscount = request.body.totalAmount;
    var jsonSplits = request.body.jsonSplits;

    var orderid = request.body.orderid;

    console.log(request.body)

// console.log('https://test.payumoney.com/payment/payment/addPaymentSplit?merchantKey=tXjTgO&merchantTransactionId='+merchantTransactionId+'&totalAmount='+totalAmount+'&totalDiscount='+totalDiscount+'&jsonSplits='+JSON.stringify(jsonSplits))

    try{
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://www.payumoney.com/payment/payment/addPaymentSplit?merchantKey=4dl2G3&merchantTransactionId='+merchantTransactionId+'&totalAmount='+totalAmount+'&totalDiscount='+totalDiscount+'&jsonSplits='+JSON.stringify(jsonSplits),
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
            var spId2 = data.result.splitIdMap
            var cn = 0
         
           

            // console.log(spId)

            var arr = [];
              Object.keys(spId2).forEach((key) => {
                  arr.push({[key]: spId2[key]});
              });

              var spId = arr
         

            for(var i = 0 ;i<jsonSplits.length;i++){

              
              // console.log(Object.keys(spId[i])[0])
              // console.log(Object.values(spId[i])[0])
              // console.log(spId[i])

              // console.log((JSON.stringify(spId[i]).split(':')[0]).replace(/"/g,'').replace(/{/,''))
              // console.log((JSON.stringify(spId[i]).split(':')[1]).split('}')[0])

              const req = new sql.Request(dbConnection);

              req.input('orderid',sql.Int, orderid);
              req.input('merchantid',sql.NVarChar(100), jsonSplits[i].merchantId);
              req.input('txnid',sql.NVarChar(100), merchantTransactionId);
              req.input('message',sql.NVarChar(100), data.message);
              req.input('paymentid',sql.NVarChar(100), data.result.paymentId);
              req.input('vendorordernum',sql.NVarChar(100), Object.keys(spId[i])[0]);
              req.input('vendorpaymentid',sql.NVarChar(100), Object.values(spId[i])[0]);
              req.input('errorcode',sql.NVarChar(100), data.errorCode);
              req.input('responsecode',sql.NVarChar(100), data.responseCode);
  
              req.execute("dbo.Add_PaymentSplitLog", function(err, data){
                if(err){
                  cn = cn +1
                  if(cn == jsonSplits.length){
                    console.log("Error while executing the SP - [error] " + err);
                    response.status(404).json({
                        data:err.message
                    });
                  }
                    
                }else{

                  cn = cn +1
                  if(cn == jsonSplits.length){
                    response.status(200).json({
                      data: data.recordset
                  });
                  }
  
                }
              })

            }

          
    
      
          }
          
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;