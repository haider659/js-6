// chapter 26
// Q1
var num =5.888;
var roundedNum = Math.round(num);
console.log(roundedNum);

// Q2
var origNum =5.888;
var roundedNum = Math.ceil(origNum);
console.log(roundedNum);

// Q3
var origNum =5.888;
var roundedNum = Math.floor(origNum);
console.log(roundedNum);

// Q4
var origNum =5.888;
var roundedNum = Math.round(origNum);
console.log(roundedNum);

// Q5
var origNum = 0.5;
var roundedNum = Math.floor(origNum);
console.log(roundedNum);

// chapter 27
// Q1
var randomNum = Math.floor(Math.random() * 50) + 1;
console.log(randomNum);
// Q2
var randomNumber = Math.random();
console.log(randomNumber);

// Q3
function rollDice() {
    
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}
var diceResult = rollDice();
console.log("The dice rolled:" + diceResult);

// Q4
function tossCoin() {
    var randomNumber = Math.random();   
    if (randomNumber < 10) {
        return "Heads";
    } else {
        return "Tails";
    }
}
var tossResult = tossCoin();
console.log("The coin toss result is:", tossResult);

// chapter 28,29
// Q1
var string = "123";
var integer = parseInt(string);

// Q2
function stringToInteger(string) {
    return parseInt(string);
}
var result = stringToInteger("123"); 
//  Q3
var string = "123.45";
var float = parseFloat(string); 

// Q4
function canConvertToNumber(string) {
    let number = parseFloat(string);
    return !isNaN(number);
}
var string1 = "123";
var string2 = "3.14";
var string3 = "hello";
console.log(canConvertToNumber(string1)); 
console.log(canConvertToNumber(string3)); 

// Q5

var number = 42;
var string = number.toString(); 

// Q6

function numberToString(number) {
    return number.toString();
}
let result = numberToString(42);

// Q7
var string = "3.14";
var integer = Math.floor(parseFloat(string)); 




