// How many "computers" are there?
// I copied this in and only made small changes so that it would console log with some text inside.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log('The number of computers is ' + count); 



// Array of people going to see Mad Max
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: 'Mike',
        age: 12,
        gender: 'male',
    }, {
        name: 'Madeline',
        age: 80,
        gender: 'female'
    }, {
        name: 'Cheryl',
        age: 22,
        gender: 'female',
    }, {
        name: 'Sam',
        age: 30,
        gender: 'male',
    }, {
        name: 'Suzy',
        age: 4,
        gender: 'female',
    }
];

// Loop #1 --  Console.log 'old enough' if person is 18 or older and 'not old enough' if person is under 18.
function isOldEnough(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log ('old enough');
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log ('not old enough');
        }
    }
}
console.log ('---------');
isOldEnough();


// Loop #2  --  Log a personalized message.    
function isOldEnoughWithName(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max');
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max');
        }
    }
}
console.log('---------');
isOldEnoughWithName();

// Loop #3  --  Whether Male or Female - add personalized message.

// first one -- if female
function oldEnoughWithGenderFemale(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough, let her in.');
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let her in.");
        }
    }
}
console.log('---------');
oldEnoughWithGenderFemale();

// second one -- if male
function oldEnoughWithGenderMale(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough, let him in.');
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let him in.");
        }
    }
}
console.log('--------');
oldEnoughWithGenderMale();



// For loop through 101 numbers (from 0 - 100). If Odd number, print "Odd", otherwise print "Even"
for (var x = 0; x <= 100; x++){
        if (x % 2 === 0) {
            console.log(x + " is even");   
        } else {
            console.log(x + " is odd");
        }
}
console.log('-----------')



// Extra Credit -- Lightswitch scenario
var lights = false;
var switches = [ 2, 3, 2 ];
for ( var i = 0; i < switches.length; i++ ){
    for ( var j = 0; j < switches[i]; j++ ){
        lights = !lights;
    }
}
if( lights ){
    console.log("The lights are on");
} else {
    console.log("The lights are off");
}

