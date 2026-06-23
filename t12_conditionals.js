/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("t12_conditionals");
OUTPUT.innerHTML = "Hello World";
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
console.log("Running t12_conditionals.js")

//Variables
var drivingAge = 16;
var schoolName = "HVHS";
var validReply = false;

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
if(age<70){
    console.log("Definitely too young!")
}
if(age>=70){
    console.log("Might be too old!")
}
if(age==70){
    console.log("Just right!")
}


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
function Number(){
    let userAgeString = AGE_FIELD.value;
    let userAgeNumber = Number(userAgeString);
}