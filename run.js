
var theBandList = require("./bands.js");

// This will print everything in exports.

for (var key in theBandList){
    console.log("A " + key + " band is " + theBandList[key] + ".");
}
