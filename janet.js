function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
}

function remainder(a, b) {
    return parseFloat(a) % parseFloat(b)
}

var answer;

if (process.argv[2] === "add") {
    answer = add(process.argv[3], process.argv[4]);
} else if (process.argv[2] === "subtract") {
    answer = subtract(process.argv[3], process.argv[4]);
} else if (process.argv[2] === "multiply") {
    answer = multiply(process.argv[3], process.argv[4]);
} else if (process.argv[2] === "divide") {
    answer = divide(process.argv[3], process.argv[4]);
} else if (process.argv[2] === "remainder") {
    answer = remainder(process.argv[3], process.argv[4]);
}
console.log(answer);
