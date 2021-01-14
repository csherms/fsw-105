// #1 -- Write a function that accepts two numbers as parameters and returns the sum.

function sum(a, b) {
    console.log (a + b);
}
sum(25, 16);




// #2 -- Write a function that accepts three numbers as parameters and returns the largest of those numbers.

function findLargest(a, b, c) {
    console.log(Math.max(a, b, c));
}
findLargest(1, 2, 3);




// #3 -- Write a function that accepts one number as a parameter and returns whether that number is even or odd.

function oddOrEven(num) {
    if ( num % 2 == 0) {
	console.log('Even');
} else {
	console.log('Odd');
}
}
oddOrEven(5);




// #4 -- Write a function that accepts a string as a parameter.

function playingWithString(myVar) {
    if(myVar.length <= 20) {    
        console.log(`${myVar} ${myVar}`); 
    } else if (myVar.length > 20) {
        console.log(myVar.slice(0, 22));
    }
}
playingWithString('the quick brown fox jumped over the lazy dog');



// --Extra Credit -- Fibonacci  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fib(n) {
    if(n < 3) return 1;
    let prev = 1;
    let curr = 1;
    for(let i = 2; i < n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log (fib(4) + fib(3) + fib(2) + fib(1));



// -- Extra Credit -- Write a function that accepts a string as a parameter. Return the most frequently occurring letter.

function mostFrequent (myString) {
        if ( 't' > 'e' || 's') {
            return ( '(t) is the most frequent character');
        }
}
console.log (mostFrequent('test'));



