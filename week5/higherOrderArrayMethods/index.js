console.log("-------SECTION-A-------")
// SECTION A:
// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if (num >= 5)
            return num;
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));



// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const result = arr.filter(function(num){
        if (num % 2 == 0)
        return num;
    });
    return result;
}

console.log(evensOnly([3, 6, 8, 2])); 



console.log("-------SECTION-B-------")
// SECTION B:
// 1) Make an array of numbers that are doubles of the first array.
function doubleNumbers(arr){
    const result = arr.map(function(item){
        return item * 2;
    })
    return result;
}
console.log(doubleNumbers([2, 5, 100]));



// 2) Take an array of numbers and make them strings.
function stringItUp(arr){
    const result = arr.map(function(item){
        return item.toString();
    })
    return result;
}
console.log(stringItUp([2, 5, 100]));



// Capitalize each of an array of names.
function capitalizeNames(arr){
    const result = arr.map(function(item){
        return item.toUpperCase();
    })
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



console.log("-------SECTION-C-------")
// SECTION C:
// 1) Turn an array of numbers into a total of all the numbers.
function total(arr){
    const result = arr.reduce(function(a, b){
        return a + b;
    })
    return result;
}
console.log(total([1, 2, 3]));



// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    const result = arr.reduce(function(a, b){
        return a + b.toString()
    })
    return result;
}
console.log(stringConcat([1, 2, 3]));



// 3) Turn an array of voter objects into a count of how many people voted.
function totalVoters(arr){
    return arr.reduce(function(count, voter) {
        return count + voter.voted;
    }, 0);
}
var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zach", age: 19, voted: false}
];
console.log(totalVoters(voters));



console.log("-------SECTION-D-------")
// SECTION D:
// 1) Sort an array from smallest number to largest.
function leastToGreatest(arr){
    const result = arr.sort(function(a, b){
        return a - b;
    })
    return result;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));



// 2) Sort an array from largest number to smallest.
function greatestToLeast(arr){
    const result = arr.sort(function(a, b){
        return b - a;
    })
    return result;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));



// 3) Sort an array from shortest string to longest.
function lengthShort(arr){
    const result = arr.sort(function(a, b){
        return a.length - b.length;
    })
    return result;
}
console.log(lengthShort(["dog", "wolf", "by", "family", "eaten"]));




console.log("-------EXTRA CREDIT-------")
// Extra Credit A-1:) Make a filtered list of all the people who are old enough to see The Matrix (17+).
function ofAge(arr){
    const result = arr.filter(function(people){
        if (people.age > 17)
        return people;
    })
    return result;
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));



// Extra Credit B-1:) Make an array of strings of the names
function namesOnly(arr){
    const result = arr.map(function(item){
        return item.name;
    })
    return result;
}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));



// Extra Credit B-2:) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    const result = arr.map(function(item){
        if(item.age >= 18){
    return item.name + " can go to the Matrix.";
        } else {
            return item.name + " is underage!."
        }
    })
    return result;
}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));



// Extra Credit C-1:) Given an array of all your wishlist items, return the total cost of all items
function shoppingSpree(arr){
    var result = arr.map(function(a) {
    return a.price;
  }).reduce(function(a, b) {
    return a + b;
  });
  return result;
}
var wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
]
console.log(shoppingSpree(wishlist));



// Extra Credit C-2:) Given an array of arrays, flatten them into a single array
function flatten(arr){
    const result = arr.reduce(function(a, b){
        return a.concat(b);
    })
    return result;
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
console.log(flatten(arrays));



// Extra Credit D-1:) Sort an array alphabetically.
function alphabetical(arr) {
    return arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));