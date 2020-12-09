const http = require("http");

const app = require("./app");

// const port = process.env.PORT || 7000;

const port = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(port);
console.log("listening at port ", port);



// {
//     "server" : "192.227.85.199",
//     "user" : "bmsdev2_db",
//     "password" : "dc*5fR86",
//     "database" : "bmsdev2",
//     "port" : 1433,
//     "options" : {
//         "encrypt" : false
//     }
// }




