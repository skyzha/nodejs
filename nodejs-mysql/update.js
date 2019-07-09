var dbb = require("./db_config");

dbb.connect(function(err) {
    if (err) throw err;

    // kita akan mengubah alamat starbucks
    let sql = `UPDATE customers SET address = 'LEM Lantai 1' WHERE id = 1`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
})