// 1. Make a function that will return any given string into all caps followed by the same string all lowercase.

function both(a) {
    var capital = a.toLocaleUpperCase(a);
    var lowercase = a.toLocaleLowerCase(a);
    return(capital + ' ' + lowercase);
}
console.log(both('Hello'));




// 2. Make a function that returns a number half the length and rounded down. 

function halfAndRoundedDown(b) {
    return Math.floor(b.length / 2);
}
console.log(halfAndRoundedDown('Hello World'));




// 3. Make a function that uses slice() and the other functions you've written to return the first half of the string.

function returnHalf(c) {
    var firstHalf =  Math.floor(c.length / 2);
    return(c.slice(0, firstHalf));
}
console.log(returnHalf('Hello World'));




/* 4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.) */

function halfCap(d) {
    var firstH = Math.floor(d.length / 2);
    var fHBackToStr = d.slice(0, firstH);
    var fHToCap = fHBackToStr.toLocaleUpperCase(firstH);
    var lastH = d.slice(firstH);
    return(fHToCap + lastH );
}
console.log(halfCap('test'));



// BONUS -- Make a function that takes any string and capitalizes any character that follows a space.

function afterEverySpace(e) {
   var splitStr = e.toLocaleLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toLocaleUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

console.log(afterEverySpace('hey friends! practice, practice, practice!'));