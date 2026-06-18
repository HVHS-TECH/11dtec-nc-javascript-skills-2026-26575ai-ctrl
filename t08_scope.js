
console.log("Running scope.js")

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
