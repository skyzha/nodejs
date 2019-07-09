var moment = require("moment");
var salam = require("./salam");
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
console.log(salam.salamPagi());