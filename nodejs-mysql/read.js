var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;

    let sql = "SELECT * FROM customers";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // gunakan perulanagna untuk menampilkan fata
        console.log(`ID \t NAME \t\t ADDRESS`);
        console.log(`---------------------------------------`);
        result.forEach(customer => {
            console.log(`${customer.id} \t ${customer.name} \t ${customer.address}`);
        });
        // console.log(result);
    });
});