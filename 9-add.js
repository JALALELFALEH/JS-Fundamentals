const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

function add (a, b) {
    let result = a + b;
    return result
};

if (isNaN(process.argv[2], process.argv[3])){
    console.log("NaN")
} else {
    console.log(add(num1, num2));
}