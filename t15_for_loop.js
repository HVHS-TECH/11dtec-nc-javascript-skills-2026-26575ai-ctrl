const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
console.log("Starting Loop");
for(count=0;count<10;count++){
    console.log("Current Count: " + count);
    OUTPUT.innerHTML += "Current Count: " + count + "<br>";
}

console.log("Loop stopped");    