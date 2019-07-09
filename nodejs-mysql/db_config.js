var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "koreaqicoid",
    database: 'node_mysql'
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected");
// });

module.exports = db;