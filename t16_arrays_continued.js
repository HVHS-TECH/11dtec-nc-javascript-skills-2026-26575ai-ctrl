const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
console.log("t16_arrays_continued.js loaded");
classArray.push("Anand");
const names = ["Airi", "Lily", "Ella", "Isabella", "Emily", "Olivia"];
for(let i=0; i<names.length; i++){
    OUTPUT.innerHTML += "Person " + i + ": " + names[i] + "<br>";  
}
document.getElementById("spaceForJavaScriptOutput").innerHTML += "<br>Loop stopped";