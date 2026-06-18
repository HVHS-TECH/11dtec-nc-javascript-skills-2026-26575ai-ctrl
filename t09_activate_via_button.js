/****************************
Name of the task:
****************************/
console.log("Running t01_introduction.js")
<button onClick="start()"> START </button>

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
OUTPUT.innerHTML="<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML="<p>Hi "+name+"</p>";
OUTPUT.innerHTML+="<p>As of you are "+age+"years old</p>";
OUTPUT.innerHTML+="<p>In 10 years you will be"+num1+num2+"</p>";
OUTPUT.innerHTML+="<p>You have"+pocketMoney+"dollars</p>";
OUTPUT.innerHTML+="<p>You spend half of your money, now you have"+num3+"</p>";
OUTPUT.innerHTML+="<p>Then you get $3, now you have"+num4+"</p>";

/****************************
Main code
****************************/
<p>Open the console <code>(Ctrl-Shift-i)</code>
<button onclick="start()">Start</button>
<div id="spaceForJavaScriptOutput"></div>




/****************************
Functions
****************************/
function start(){
    spaceForJavaScriptOutput.innerHTML="<h2>Added by JavaScript</h2>";
    spaceForJavaScriptOutput.innerHTML+="<p>Hi "+name+"</p>";
    answer=currentYear-userAge;
    spaceForJavaScriptOutput.innerHTML+="<p>As of you are "+age+"years old</p>";
}
