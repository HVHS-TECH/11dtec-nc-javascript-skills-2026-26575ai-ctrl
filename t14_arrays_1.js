console.log("Running t14_arrays_1.js")

let classArray = ["Airi", "Lily", "Ella", "Isabella", "Emily", "Olivia"];
let choice = CHOOSE_FIELD.value;
document.getElementById("submitOutput").addEventListener("submit", function(){
    alert("You chose: " + classArray[choice]);
});
