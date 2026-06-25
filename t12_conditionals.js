/****************************
Name of the task:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");


console.log("Running t12_conditionals.js")


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


/****************************
Main code
****************************/




/****************************
Functions
****************************/
function getFormInput(){
    let userName = NAME_FIELD.value;
    let userAge = AGE_FIELD.value;

    OUTPUT.innerHTML ="<h2>Added by JavaScript</h2>";
    OUTPUT.innerHTML +="<p>Your name is " + userName + "</p>";
    OUTPUT.innerHTML +="<p>Your age is " + userAge + "</p>";
    OUTPUT.innerHTML +="<p>In 10 years you will be " + (Number(userAge) + 10) + "</p>";
}