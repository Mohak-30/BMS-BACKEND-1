const express = require("express");
const router = express.Router();
const sql = require("mssql");

var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var crypto = require('crypto');
var reqpost = require('request');


var request = require('request');

const dbConnection = require("../../../utilities/db1");

var key = "4dl2G3";
var salt = "Y8YsVhof";

router.post("/", function(req, res){
   
	var txnid = req.body.txnid
	
	var command = "verify_payment";
	
	var hash_str = key  + '|' + command + '|' + txnid + '|' + salt ;
	var vcryp = crypto.createHash('sha512');	
	vcryp.update(hash_str);
	var vhash = vcryp.digest('hex');
	
	var vdata='';
	var details='';
	
	var options = {
		method: 'POST',
		uri: 'https://info.payu.in/merchant/postservice.php?form=2',
		form: {
			key: key,
			hash: vhash,
			var1: txnid,
			command: command
		},
		headers: {
			//  'content-type': 'application/x-www-form-urlencoded' 
		}
	};
	

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
                vdata = JSON.parse(body);	
                console.log(vdata)
				if(vdata.status == '1')
				{
					details = vdata.transaction_details[txnid];
					console.log(details['status'] + '   ' + details['mihpayid']);
					if(details['status'] == 'success')
						verified ="Yes";
					else
						verified = "No";

						try{


                            const req = new sql.Request(dbConnection);
				
							req.input('txnid',sql.NVarChar(200), details['txnid']);
							req.input('txnstatus',sql.NVarChar(50), vdata.status);
							req.input('msg',sql.NVarChar(200), vdata.msg);
							req.input('mihpayid',sql.NVarChar(200), details['mihpayid']);
							req.input('requestid',sql.NVarChar(100), details['request_id']);
							req.input('bankrefnum',sql.NVarChar(100), details['bank_ref_num']);
							req.input('amount',sql.Decimal(18,2), details['amt']);
							req.input('txnamount',sql.Decimal(18,2), details['transaction_amount']);
							req.input('additionalcharges',sql.Decimal(18,2), details['additional_charges']);
							req.input('productinfo',sql.NVarChar(200), details['productinfo']);
							req.input('firstname',sql.NVarChar(200), details['firstname']);
							req.input('bankcode',sql.NVarChar(50), details['bankcode']);
							req.input('udf1',sql.NVarChar(100), details['udf1']);
							req.input('udf3',sql.NVarChar(100), details['udf3']);
							req.input('udf4',sql.NVarChar(100), details['udf4']);
							req.input('udf5',sql.NVarChar(100), details['udf5']);
							req.input('field2',sql.NVarChar(100), details['field2']);
							req.input('field9',sql.NVarChar(100), details['field9']);
							req.input('errorcode',sql.NVarChar(100), details['error_code']);
							req.input('addedon',sql.NVarChar(200), details['addedon']);
							req.input('paymentsource',sql.NVarChar(100), details['payment_source']);
							req.input('cardtype',sql.NVarChar(100), details['card_type']);
							req.input('errormsg',sql.NVarChar(100), details['error_Message']);
							req.input('netamountdebit',sql.Decimal(18,2), details['net_amount_debit']);
							req.input('disc',sql.Decimal(18,2), details['disc']);
							req.input('mode',sql.NVarChar(100), details['mode']);
							req.input('pgtype',sql.NVarChar(100), details['PG_TYPE']);
							req.input('cardnumber',sql.NVarChar(100), details['card_no']);
							req.input('nameoncard',sql.NVarChar(100), details['name_on_card']);
							req.input('adf2',sql.NVarChar(100), details['udf2']);
							req.input('paystatus',sql.NVarChar(100), details['status']);
							req.input('unmappedstatus',sql.NVarChar(100), details['unmappedstatus']);
							req.input('merchanturl',sql.NVarChar(100), details['Merchant_UTR']);
							req.input('settledat',sql.NVarChar(200), details['Settled_At']);
							
							req.execute("dbo.Add_PaymentTransaction", function(err, data){
								if(err){
			
                                    res.status(404).json({
                                        data:err.message
                                    })
									}else{

                                        if(details['status'] == 'success'){

                                            const req2 = new sql.Request(dbConnection);
				
							req2.input('txnid',sql.NVarChar(200), txnid);
							req2.input('paystatus',sql.NVarChar(50), 'Success');
							req2.input('orderstatus',sql.NVarChar(200), 'Placed');
							
							
							req2.execute("dbo.Update_OrderVerificationStatus", function(err2, data2){
								if(err2){
			
                                    res.status(404).json({
                                        data:err2.message
                                    })
									}else{

                                        res.status(200).json({
                                            data: data2.recordset
                                        });
                                    }
                                })


                                        }else
                                        {

                                            const req2 = new sql.Request(dbConnection);
				
                                            req2.input('txnid',sql.NVarChar(200), txnid);
                                            req2.input('paystatus',sql.NVarChar(50), 'Failed');
                                            req2.input('orderstatus',sql.NVarChar(200), 'Failed');
                                            
                                            
                                            req2.execute("dbo.Update_OrderVerificationStatus", function(err2, data2){
                                                if(err2){
                            
                                                    res.status(404).json({
                                                        data:err2.message
                                                    })
                                                    }else{
                
                                                        res.status(200).json({
                                                            data: data2.recordset
                                                        });
                                                    }
                                                })
                

                                        }
                                      
                                    
									 }
                            })
							
						}catch (err){
                            res.status(400);
                            res.send(err);
							}
				
                }else
                {

                    const req2 = new sql.Request(dbConnection);
				
                    req2.input('txnid',sql.NVarChar(200), txnid);
                    req2.input('paystatus',sql.NVarChar(50), 'Failed');
                    req2.input('orderstatus',sql.NVarChar(200), 'Failed');
                    
                    
                    req2.execute("dbo.Update_OrderVerificationStatus", function(err2, data2){
                        if(err2){
    
                            res.status(404).json({
                                data:err2.message
                            })
                            }else{

                                res.status(200).json({
                                    data: 'Not Found'
                                });  
                            }
                        })
                  
                }
		
		}
	}
	
	request(options, callback);

	

    try{
       
    }catch (err){
        res.status(500);
        res.send(err.message);
    }


});

module.exports = router;