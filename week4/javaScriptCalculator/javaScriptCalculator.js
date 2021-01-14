const readline = require("readline-sync");



// A function that adds two numbers and returns the result.

function add(num1, num2) {
    return(num1 + num2);
}



//A function that multiplies two numbers and returns the result.

function multiply(num1, num2) {
    return(num1 * num2);
}



// A function that divides two numbers and returns the result

function divide(num1, num2) {
    return(num1 / num2);
}



// A function that subtracts two numbers and returns the result.

function subtract(num1, num2) {
    return(num1 - num2);
}



// Main calculator function.

function operator(add, mul, div, sub) {
    if (readlineSync.add('Add')) {
        console.log(add(num1, num2));
    } else if (readlineSync.mul('Times')) {
        console.log(multiply(num1, num2));
    } else if (readlineSync.div('Divide')) {
        console.log(divide(num1, num2));
    } else if (readlineSync.sub('Minus')) {
        console.log(subtract(num1, num2));
    }

}