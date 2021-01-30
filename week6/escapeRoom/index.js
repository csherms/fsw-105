const readlineSync = require("readline-sync");

var playerName = readlineSync.question('May I have your name? ');

var greeting = `Welcome ${playerName}, let's play a game. You are locked in this room, and you must find a way to escape... Good Luck!`
console.log(greeting);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    menuOptions = readlineSync.keyIn('Enter 1 to put hand in the hole \n Enter 2 to find the Key \n Enter 3 to open the door ', {limit: '$<1-3>'});
    console.log(menuOptions);
    if(menuOptions == 1){
        console.log(`Oops, sorry ${playerName}. You have died. Please try again.`);
        isAlive = false;
    } else if(menuOptions == 2 && hasKey == false){
        console.log(`Congratulations ${playerName}! You have found the KEY!`);
        hasKey = true;
    } else if(menuOptions == 2 && hasKey == true){
        console.log("You have already found the key... Please proceed to option 3");
        hasKey = true;
    } else if(menuOptions == 3 && hasKey == false){
        console.log("You must find the KEY before you can escape!");
    } else if(menuOptions == 3 && hasKey == true){
        console.log(`Congratulations ${playerName}! You have ESCAPED the Simulation!`);
    }
}




