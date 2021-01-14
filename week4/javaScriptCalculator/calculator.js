const readlineSync = require("readline-Sync");
var num1 = readlineSync.questionInt("Please enter your first number: ");
var num2 = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question('Please enter the operation to perform: add, sub, mul, div');

// Math Functions.
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
function subTwoNumbers(num1, num2){
    return num1 - num2;
}
function mulTwoNumbers(num1, num2){
    return num1 * num2;
}
function divTwoNumbers(num1, num2){
    return num1 / num2;
}

// Main Calculator Function.
function myCalculator(num1, num2, enteredOperator){
    if(enteredOperator == 'add'){
        console.log("The result is: " + addTwoNumbers(num1, num2));
    } else if (enteredOperator == 'mul'){
        console.log("The result is: " + mulTwoNumbers(num1, num2));
    } else if (enteredOperator == 'div'){
        console.log("The result is: " + divTwoNumbers(num1, num2));
    } else if (enteredOperator == 'sub') {
        console.log("The result is: " + subTwoNumbers(num1, num2));
    }
}

myCalculator(num1, num2, enteredOperator);



