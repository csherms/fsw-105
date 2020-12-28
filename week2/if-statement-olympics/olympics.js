// Preliminaries Start:
// Write an if statement that prints "is greater than" if 5 is greater than 3.
var i = 5;
if (i > 3) {
    console.log ("5 is greater than 3");
}

    
// Write an if statement that prints "is the length" if the length of "cat" is 3.
var catlength = 3;
if (catlength == 3) {
    console.log ("the cat's length is 3");
}


// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
var cat = "dog";
if (cat == "cat") {
    console.log ("the cat is indeed a cat");
} else{
    console.log ("Cats are not the same as dogs! What are you thinking?");
}
// Preliminaries End:  




// Bronze Medal Start:
// Are you old enough to see this movie, kid?  -- if/else statement.
var person = {
    firstName: "Bobby",
    lastName: "Boy",
    age: 12,
    firstLetterB: true,
    fullName: function () {
        return person.firstName +" "+ person.lastName;
    }
}
if (person.age >= 18) {
    console.log ("Thank you " + person.fullName() + "," + " enjoy the show! ");
} else{
    console.log (person.fullName() + " is too young to see this movie! ");
}
// If person's name starts with the letter "B".
person.fullName.call(person);
if (person.firstLetterB == true) {
    console.log ("Your name begins with the letter B, but alas, you are not 18...");
}
// If person's name begins with "B" and is 18 or older.
if (person.age >= 18 && person.firstLetterB == true) {
    console.log ("Congratulations! You fit the all the requirements to see this movie!");
}
// This is the else statement for both the age, and the first letter requirements.
else {
    console.log ("Sorry, you did not meet all of the requirements, you can't see the movie.");
}
// Bronze Medal End:




// Silver Medal Start:
/* Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff. */
var number = 2
if (number == 1) {
console.log ("strict");
} else if (number <= 3) {
  console.log ("abstract");
} else {
  console.log ("not equal at all");
}
// Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
var one = 1;
var two = 4;
if (one <=2 && two==4) {
    console.log ("yes");
} else {
    console.log ("no");
}
//Silver Medal End:



// Gold Medal Start:
// Write an if statement that checks to see if "dog" is a string.
var stringvalue = 'dog';
if (typeof stringvalue === 'string'){
    console.log ('this is a string');
}
// Write an if statement that checks to see if "true" is a boolean.
var booleanvalue = true;
if (typeof booleanvalue === 'boolean'){
    console.log ('this is a boolean');
}
// Write an if statement that checks to see if a variable has been defined or not.
var x;
var y = 10;
if (typeof x === 'undefined') {
    console.log ('Variable x is undefined');
}
if (typeof y === 'undefined'){
    console.log ('Variable y is undefined');
}
// Write a statement asking if "s" is greater than 12.
var s = 1;
var number = 12;
if (s > 12) {
    console.log ('s is greater than 12');
} else{
    console.log ('s is not greater than 12');
}
// Try it with a few more letters and a few numbers
var a =23;
Number = 22;
if (a <= 22) {
    console.log ('a is less than or equal to 22');
} else{
    console.log ('a is greater than 22')
}

var bbb = 500;
Number = 700;
if (Number == 600 || bbb == 500) {
    console.log ('half is true');
} else {
    console.log ('not true');
}
// Write a ternary statement that uses console.log to display whether a number is odd or even.
var myNum = 10;
if(myNum % 2 == 0) {
    console.log("The number is even.");
}else {
    console.log("The number is odd.");
}


// Gold Medal End:

