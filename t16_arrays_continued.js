const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
console.log("t16_arrays_continued.js loaded");
function getFormInput(event){
    event.preventDefault();
    let number = Number(document.getElementById("number").value);

    OUTPUT.innerHTML += "Person " + (classArray.length ) + ": " + classArray[classArray.length - 1] + "<br>";
}
console.log("Starting Loop");
for(let i=0; i<classArray.length; i++){
    OUTPUT.innerHTML += "Person " + i + ": " + classArray[i] + "<br>";  
}
console.log("Loop stopped");