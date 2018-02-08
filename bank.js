var fs = require("fs");

var textFile = process.argv[2];

//Where node adds the transations in"

fs.readFile("bank.text","utf8", function(error,data){
    if (error){
        return console.log(error);
    }
})

console.log(data);

  // Then split it by commas (to make it more readable)
  var bankArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(bankArr);


// fs.appendFile("bank.text","transation", function(err) {
    
//       // If an error was experienced we say it.
//       if (err) {
//         console.log(err);
//       }
    
//       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//       else {
//         console.log("transaction notice");
//       }
// });





var total 

var deposit

var withdraw


