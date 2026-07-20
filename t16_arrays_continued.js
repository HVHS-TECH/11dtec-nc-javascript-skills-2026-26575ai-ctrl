const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
console.log("t16_arrays_continued.js loaded");
function getFormInput(event){
    event.preventDefault();
    let number = Number(document.getElementById("number").value);
    let names = ["Airi", "Lily", "Ella", "Isabella", "Emily", "Olivia"];
    classArray.push("Anand");
    OUTPUT.innerHTML += "Person " + (classArray.length - 1) + ": " + classArray[classArray.length - 1] + "<br>";
    document.getElementById("result").textContent = names[number];
}