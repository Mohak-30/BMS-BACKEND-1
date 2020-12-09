const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){

   
    var trainer_id= request.body.trainer_id;
    var photo= request.body.photo;
    // var type= request.body.type;
    var name = request.body.name;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var website = request.body.website;
    var overall_experience = request.body.overall_experience;
    var profile = request.body.profile;
    var medical_association = request.body.medical_association;
    var reward_recognition = request.body.reward_recognition;
    var home_visit = request.body.home_visit;
    var tele_online_consulation = request.body.tele_online_consulation;
    var facebook = request.body.facebook;
    var twitter = request.body.twitter;
    var linkedin = request.body.linkedin;
    var youtube = request.body.youtube;
    var consent = request.body.consent;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


  
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('trainer_id',sql.Int, trainer_id);
        req.input('photo',sql.NVarChar(100), photo);
        // req.input('type',sql.NVarChar(100), type);
        req.input('name',sql.NVarChar(100), name);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('website',sql.NVarChar(100), website);
        req.input('overall_experience',sql.NVarChar(100), overall_experience);
        req.input('profile',sql.NVarChar, profile);
        req.input('medical_association',sql.NVarChar, medical_association);
        req.input('reward_recognition',sql.NVarChar, reward_recognition);
        req.input('home_visit',sql.NVarChar(10), home_visit);
        req.input('tele_online_consulation',sql.NVarChar(10), tele_online_consulation);
        req.input('facebook',sql.NVarChar(200), facebook);
        req.input('twitter',sql.NVarChar(200), twitter);
        req.input('linkedin',sql.NVarChar(200), linkedin);
        req.input('youtube',sql.NVarChar(200), youtube);
        req.input('consent',sql.NVarChar(100), consent);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Update_YogaTrainer", function(err, data){
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