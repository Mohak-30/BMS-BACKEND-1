const express = require("express");
const router = express.Router();
const sql = require("mssql");

var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var crypto = require('crypto');
var reqpost = require('request');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({secret: 'mcg001k',saveUninitialized: true,resave: true}));
// app.use(express.static(__dirname + '/'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.set('views', __dirname);

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
			/* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
		}
	};
	
	reqpost(options)
		.on('response', function (resp) {
			console.log('STATUS:'+resp.statusCode);
			resp.setEncoding('utf8');
			resp.on('data', function (chunk) {
				// console.log(chunk)
				vdata = JSON.parse(chunk);
				// console.log(vdata)	
				if(vdata.status == '1')
				{
					details = vdata.transaction_details[txnid];
					console.log(details['status'] + '   ' + details['mihpayid']);
					if(details['status'] == 'success' && details['mihpayid'] == mihpayid)
						verified ="Yes";
					else
						verified = "No";
						// res.sendFile(__dirname+"/Resp.html");
					res.render(__dirname+"/Resp.html", {txnid: txnid,amount: amount, productinfo: productinfo, 
	additionalcharges:additionalcharges,firstname: firstname, email: email, mihpayid : mihpayid, status: status,resphash: resphash,msg:msg,verified:verified});
				}
			});
		})
		.on('error', function (err) {
			console.log(err);
		});

    try{
       
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;