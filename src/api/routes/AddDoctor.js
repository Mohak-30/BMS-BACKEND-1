const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var medical_reg_id = request.body.medical_reg_id;
    var start_date_of_practice= request.body.start_date_of_practice;
    var photo= request.body.photo;
    var consent = request.body.consent;
    var qualification = request.body.qualification;
    var institute = request.body.institute;
    var specialization = request.body.specialization;
    var diabetes_experience = request.body.diabetes_experience;
    var overall_experience = request.body.overall_experience;
    var completion_year = request.body.completion_year;
    var medical_association = request.body.medical_association;
    var reward_recognition = request.body.reward_recognition;
    var name = request.body.name;
    var mobile = request.body.mobile;
    var email = request.body.email;
    var website = request.body.website;
    var facebook = request.body.facebook;
    var twitter = request.body.twitter;
    var linkedin = request.body.linkedin;
    var youtube = request.body.youtube;
    var home_visit = request.body.home_visit;
    var tele_online_consulation = request.body.tele_online_consulation;
    var profile = request.body.profile;
    var consent = request.body.consent;
    var show_on_website = request.body.show_on_website;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    // console.log(request.body)

    try{
        const req = new sql.Request(dbConnection);
    

        req.input('medical_reg_id',sql.NVarChar(100), medical_reg_id);
        req.input('start_date_of_practice',sql.NVarChar(200), start_date_of_practice);
        req.input('photo',sql.NVarChar(100), photo);
        req.input('consent',sql.NVarChar(100), consent);
        req.input('qualification',sql.NVarChar(200), qualification);
        req.input('institute',sql.NVarChar(200), institute);
        req.input('specialization',sql.NVarChar(200), specialization);
        req.input('diabetes_experience',sql.NVarChar(50), diabetes_experience);
        req.input('overall_experience',sql.NVarChar(50), overall_experience);
        req.input('reward_recognition',sql.NVarChar, reward_recognition);
        req.input('completion_year',sql.NVarChar(200),completion_year);
        req.input('medical_association',sql.NVarChar, medical_association);
        req.input('name',sql.NVarChar(100), name);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('email',sql.NVarChar(100), email);
        req.input('website',sql.NVarChar(100), website);
        req.input('facebook',sql.NVarChar(200), facebook);
        req.input('twitter',sql.NVarChar(200), twitter);
        req.input('linkedin',sql.NVarChar(200), linkedin);
        req.input('youtube',sql.NVarChar(200), youtube);
        req.input('home_visit',sql.NVarChar(10), home_visit);
        req.input('tele_online_consulation',sql.NVarChar(10), tele_online_consulation);
        req.input('profile',sql.NVarChar, profile);
        req.input('consent',sql.NVarChar(100), consent);
        req.input('show_on_website',sql.NVarChar(10), show_on_website);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Add_Doctor", function(err, data){
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