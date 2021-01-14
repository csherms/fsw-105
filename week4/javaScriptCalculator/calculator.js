const readlineSync = require("readline-Sync");
var firstNumber = readlineSync.questionInt("Please enter your first number");
var secondNumber = readlineSync.questionInt("Please enter your second number");
var enteredOperator = readlineSync.questionInt('add','sub','mul','div');

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function myCalculator(firstNumber, secondNumber, enteredOperator){
    if(enteredOperator == "add"){
        addTwoNumbers(firstNumber, secondNumber);
    }
}

myCalculator(firstNumber, SecondNumber, enteredOperator);



