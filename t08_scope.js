/****************************
Name of the task:
****************************/
console.log("Running t08_scope.js")


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
writeLine();
displayWelcome("Airi", 16, 4,);




/****************************
Functions
****************************/
function writeLine(){
    //Add a line to the html page
    OUTPUT.innerHTML+="<p>Welcome to the shop</p>";
}
function displayWelcome(_name,_age,_chocolateBar){
    OUTPUT.innerHTML+="<p>Welcome to the page " + _name + "!</p>";
    OUTPUT.innerHTML+="<p>You are " + _age + " years old.</p>";
    OUTPUT.innerHTML+=`<p>Chocolate bar: ${_chocolateBar}</p>`;

}
var myVar=0;
OUTPUT.innerHTML="Start: " + myVar+"<br>";

functionOne();
function functionOne(){
    myVar+1;
    OUTPUT.innerHTML+="Function one: " + myVar+"<br>";
}

functionTwo();
function functionTwo(){
    myVar+2;
    OUTPUT.innerHTML+="Function two: " + myVar+"<br>";
}

OUTPUT.innerHTML+="end: " + myVar+"<br>";
