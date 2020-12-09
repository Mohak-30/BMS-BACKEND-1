const mssql = require("mssql");
const dbConfig = require("../config1.json");


var db;

var connectToDB = function(){
    if(!db){
        db = new mssql.ConnectionPool(dbConfig);

        db.connect(function(err){
            if(err){
                console.log("connection error !!");
            }else{
                console.log("connected successfully");
            }
        });
    }
    return db;
}

module.exports = connectToDB();

