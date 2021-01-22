var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();
var a = fruit.indexOf("orange");
fruit.push(a);
var b = vegetables.length;
vegetables.push(b);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();
var myFoodItems = food.toString();

console.log(myFoodItems);

