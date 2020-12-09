const express = require("express");
const router = express.Router();

var multer =  require('multer')

var path = require('path')
var fs = require('fs')


// SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './')
//     },
//     filename: function (req, file, cb) {
// console.log(file)
//       cb(null, file.originalname)
//     }
//   })
   


  // var upload = multer({ storage: storage })

  const upload = multer({
    limits: { fieldSize: 5 * 1024 * 1024 }
  })

router.post("/"
// ,upload.single("photo")
,function(request,response,next){


  var photo= request.body.photo;
  var file_name= request.body.file_name;
  var image_url= request.body.image_url;



  var base64 = photo.split(',')[1]
  // var base64 = photo.replace('data:image/png;base64,','')
  var imageBuffer = new Buffer.from(base64, 'base64');

  fs.writeFile(image_url+file_name+'.png', imageBuffer , function (err) {
    // fs.writeFile('./i.png', imageBuffer , function (err) {
 

    if(err){
      // console.log("Error while executing the SP - [error] " + err);
      response.status(404).json({
          data:err.message
      });
  }else{
      response.status(200).json({
          data: 'Image Saved'
      });
  }
  })

  // var originaldata = Buffer.from(req.body.image, 'base64');
  // var duplex = require("stream").Duplex;
  // var readStream = new duplex();
  // readStream.push(originaldata);
  // readStream.push(null);

  
 
// res.send(req)
    
})

module.exports = router;