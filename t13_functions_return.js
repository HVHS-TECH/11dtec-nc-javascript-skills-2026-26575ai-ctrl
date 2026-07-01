/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
console.log("Running t13_functions_return.js")

//Variables
let name = "Airi";
let age = 16;
let isAwake = true;
let pocketMoney = 10;
if(OUTPUT){
OUTPUT.innerHTML += "This week`s pay:<br>";
OUTPUT.innerHTML += "Monday: $" +mondayPay+"<br>";
OUTPUT.innerHTML += "Tuesday: $" +tuesdayPay+"<br>";
}




/****************************
Main code
****************************/




/****************************
Functions
****************************/
 if(pocketMoney < 4){
  OUTPUT.innerHTML += "<p>A chocolate bar costs $4 Sorry you cant afford a chocolate bar</p>";
}
if(pocketMoney >=4){
  OUTPUT.innerHTML += "<p>A chocolate bar costs $4 You can afford a chocolate bar</p>";
}
function calculatePay(_hours){
    let pay =_hours * 18.80;
    pay = pay-(pay* 0.105);
    pay = pay-(pay* 0.04);
     pay =pay+10;
     return pay;
}
let mondayPay = calculatePay(8);
let tuesdayPay = calculatePay(6);
