/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "Hello World";
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
console.log("Running t12_conditionals.js")

//Variables
let name = "Airi";
let age = 16;
let isAwake = true;
var pocketMoney = 10;







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


