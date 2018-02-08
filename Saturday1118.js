
function sortArray(a, b){
    return a - b;
}

var theArray = process.argv.slice(2);
console.log(theArray.sort(sortArray));