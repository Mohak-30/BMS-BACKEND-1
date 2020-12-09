const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var id = request.body.id;
    var title = request.body.title;
    var name = request.body.name;
    var practicestartdate = request.body.practicestartdate;
    var overallexp = request.body.overallexp;
    var profile = request.body.profile;
    var association = request.body.association;
    var recognition = request.body.recognition;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var website = request.body.website;
    var facebook = request.body.facebook;
    var twitter = request.body.twitter;
    var linkedin = request.body.linkedin;
    var youtube = request.body.youtube;
    var instagram = request.body.instagram;
    var homevisit = request.body.homevisit;
    var tele = request.body.tele;
    var showonweb = request.body.showonweb;
    var approved = request.body.approved;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;


  

    try{
        const req = new sql.Request(dbConnection);


        req.input('id',sql.Int, id);
        req.input('title',sql.NVarChar(10), title);
        req.input('name',sql.NVarChar(100), name);
        req.input('practicestartdate',sql.NVarChar(100), practicestartdate);
        req.input('overallexp',sql.NVarChar(200), overallexp);
        req.input('profile',sql.NVarChar, profile);
        req.input('association',sql.NVarChar(500), association);
        req.input('recognition',sql.NVarChar(500), recognition);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('website',sql.NVarChar(100), website);
        req.input('facebook',sql.NVarChar(200), facebook);
        req.input('twitter',sql.NVarChar(200), twitter);
        req.input('linkedin',sql.NVarChar(200), linkedin);
        req.input('youtube',sql.NVarChar(200), youtube);
        req.input('instagram',sql.NVarChar(200), instagram);
        req.input('homevisit',sql.NVarChar(10), homevisit);
        req.input('tele',sql.NVarChar(10), tele);
        req.input('showonweb',sql.NVarChar(10), showonweb);
        req.input('approved',sql.NVarChar(10), approved);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);


        req.execute("dbo.Update_Dietitian", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                response.status(200).json({
                    data: data.recordset
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;