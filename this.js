var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error,data){
  
    if(error){
        return console.log(error);
    }
    console.log(data);
    var bestThings = data.split(",");
    bestThings.forEach(item => {
       console.log(item); 
    })
})

