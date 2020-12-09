const express = require("express");
const router = express.Router();

var multer =  require('multer')

var path = require('path')
var fs = require('fs')



router.post("/"
// ,upload.single("photo")
,function(request,response,next){

    var url= request.body.url;

    fs.unlink(url,function(err){
        if(err){
        console.log(err)
        }else{
        console.log('done')
        }
        });


    
})

module.exports = router;