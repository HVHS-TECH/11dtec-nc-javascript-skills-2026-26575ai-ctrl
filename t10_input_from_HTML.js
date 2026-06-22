/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "Hello World";
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
console.log("Running t01_introduction.js")

//Variables

var name ="Airi"
var age=16;
var isStudent=true;
let pocketMoney=6;
var num1=10;
var num2=16;
var num3=pocketMoney/2;
var num4=num3+3;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
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
    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML
    answer=currentYear - userAge;
    spaceForJavaScriptOutput.innerHTML
}
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML ="<p>Your name is " + userName + "</p>";
}