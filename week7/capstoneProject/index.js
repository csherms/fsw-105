const readlineSync = require('readline-sync');
greeting = readlineSync.question('Welcome brave traveler!\nI am Thicky Longbeard, your trusty guide!\nMany perils await you in the accursed forest that lies ahead.\nMay your luck hold out... ');
var name = readlineSync.question('Might I have your name, traveler? ');
console.log(`Hello ${name}, let us begin the journey!`);



let enemyNames = ['Barb-Tailed Rot Yak', 'Cursevine Butcher', 'Acid Screamimg Vapor-Sloth', 'Razor footed Raptor-Dactyl'];

let treasure = ['Seal of Solitude', 'Hallowed Hide', 'Horn of Fertility', 'Canopic Jar of Swiftness'];

options = ['Press on!', 'Give up...', 'Inventory'];

var prize = [];
let playerHp = 40;
let getItem = treasure[Math.floor(Math.random()*treasure.length)];



function mainGame(){
    const enemy = enemyNames[Math.floor(Math.random() * enemyNames.length)];
    const playerAttack = Math.floor(Math.random() * (5 - 4 + 3) + 4);
    let enemyHp = 40;
    const enemyAttack = Math.floor(Math.random() * (5 - 3 + 2) + 5);


    const index = readlineSync.keyInSelect(options, 'What is your course of action?');


   if(options[index] == 'Give up...'){
       return playerHp = 0;
   } else if (options[index] == 'Inventory'){
       console.log(`${name}\nHealth: ${playerHp}\nItems: ${getItem}`);
   } else if (options[index] == 'Press on!'){
       let key = Math.random();
       if (key <= .3) {
           console.log('Charging bravely ahead!');
       } else if (key >= .3){
           console.log(`\nOh no!\nThe dreaded ${enemy} is attacking!`);

           while (enemyHp > 0 && playerHp > 0) {


            const user = readlineSync.question('\nWhat are you going to do now?\nPress "d" to dodge, or press "a" to attack! ');

            switch(user) {
                case 'd':
                    const dodge = Math.random();
                    if (dodge < .5) {
                        console.log(`\nYou fail to dodge!\nThe ${enemy} attacks, and deals you ${enemyAttack} damage! `);
                    } else {
                        console.log(`\nYou successfully dodged the ${enemy} attack! `);
                       break; 
                    }
                    

                    case 'a':
                        enemyHp -= playerAttack;
                        console.log(`You attack ${enemy} dealing a whopping ${playerAttack} damage!`);

                        playerHp -= enemyAttack;
                        console.log(`Enemy attacks you back and deals ${enemyAttack} damage!`);

                        if (enemyHp <= 0) {
                            console.log(`\nCongratulations!\nYou have decimated the ${enemy}! \nYou find ${getItem} in your foe's smoldering remains!`);
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(getItem);
                            }
                        } else if (playerHp <= 0) {
                            console.log(`${enemy} has defeated you in epic battle, and is now feasting upon your delicious corpse... Game Over.`)
                        }


            }

           }
       }
   }

while (playerHp > 0) {
    userRestore = function () {
        userActive = true;
        playerHp = 40;
    }
    userRestore();
}
}
mainGame();
   