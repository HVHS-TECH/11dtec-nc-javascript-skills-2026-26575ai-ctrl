/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "Hello World";
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
const ifButton = document.getElementById("if");
console.log("Running t12_conditionals.js")

//Variables
let name = "Airi";
let age = 16;
let isAwake = true;
var pocketMoney = 10;


if (OUTPUT) {
    OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
    OUTPUT.innerHTML += "<p>Hi " + name + "</p>";
    OUTPUT.innerHTML += "<p>As of you are " + age + " years old</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be " + (num1 + num2) + "</p>";
    OUTPUT.innerHTML += "<p>You have " + pocketMoney + " dollars</p>";
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have " + num3 + "</p>";
    OUTPUT.innerHTML += "<p>Then you get $3, now you have " + num4 + "</p>";
}

/****************************
Main code
****************************/




/****************************
Functions
****************************/
function start(){
    spaceForJavaScriptOutput.innerHTML = "";
    spaceForJavaScriptOutput.innerHTML
    answer=currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML ="<p>Your name is " + userName + "</p>";
}
function Number(){
    let userAgeString = AGE_FIELD.value;
    let userAgeNumber = Number(userAgeString);
}
function if(){
    if(pocketMoney < 4){
  OUTPUT.innerHTML += "<p>A chocolate bar costs $4 Sorry you cant afford a chocolate bar</p>";
}
if(pocketMoney >=4){
  OUTPUT.innerHTML += "<p>A chocolate bar costs $4 You can afford a chocolate bar</p>";
}
}
