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

const dbConnection = require("../../../../utilities/db1");

var key = "4dl2G3";
var salt = "Y8YsVhof";

router.post("/", function(req, res){
   
	
	var verified = 'No';
	var txnid = req.body.txnid;
	var amount = req.body.amount;
	var productinfo = req.body.productinfo;
	var firstname = req.body.firstname;
	var email = req.body.email;
	var udf5 = req.body.udf5;
	var mihpayid = req.body.mihpayid;
	var status = req.body.status;
	var resphash = req.body.hash;
	var additionalcharges = "";
	//Calculate response hash to verify	
	var keyString 		=  	key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+email+'|||||'+udf5+'|||||';
	var keyArray 		= 	keyString.split('|');
	var reverseKeyArray	= 	keyArray.reverse();
	var reverseKeyString=	salt+'|'+status+'|'+reverseKeyArray.join('|');
	//check for presence of additionalcharges parameter in response.
	if (typeof req.body.additionalCharges !== 'undefined') {
		additionalcharges = req.body.additionalCharges;
		//hash with additionalcharges
		reverseKeyString=	additionalcharges+'|'+reverseKeyString;
	}
	//Generate Hash
	var cryp = crypto.createHash('sha512');	
	cryp.update(reverseKeyString);
	var calchash = cryp.digest('hex');
	
	var msg = 'Payment failed for Hash not verified...<br />Check Console Log for full response...';
	//Comapre status and hash. Hash verification is mandatory.
	// if(calchash == resphash)
	// {
	// 	msg = 'Transaction Successful and Hash Verified...<br />Check Console Log for full response...';
	// 	console.log('success')
	// 	res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
	// 		additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: 'success',resphash: resphash,msg:msg,verified:'Yes'});
			
	// }else
	// {
	// 	console.log('failed')
	// 	res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
	// 		additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: 'fail',resphash: resphash,msg:msg,verified:'No'});
			
	// }


	if(calchash == resphash)
	msg = 'Transaction Successful and Hash Verified...<br />Check Console Log for full response...';
		
	
	// console.log(req.body);
	
	//Verify Payment routine to double check payment
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
				if(vdata.status == '1')
				{
					details = vdata.transaction_details[txnid];
					console.log(details['status'] + '   ' + details['mihpayid']);
					if(details['status'] == 'success' && details['mihpayid'] == mihpayid)
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
			
									res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
										additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: status,resphash: resphash,msg:msg,verified:verified});
							
									}else{
			
			
										res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
										additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: status,resphash: resphash,msg:msg,verified:verified});
								}
							})
						}catch (err){
							// response.status(500);
							// response.send(err.message);
									res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
				additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: status,resphash: resphash,msg:msg,verified:verified});
							}
							
						// res.sendFile(__dirname+"/Resp.html");
	// 				res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
	// additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: status,resphash: resphash,msg:msg,verified:verified});
				}
		
		}
	}
	
	request(options, callback);

	

    try{
       
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;