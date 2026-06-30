let names = ["Airi", "Lily", "Ella", "Isabella", "Emily", "Olivia"];
document.getElementById("submit").addEventListener("click", function(){
    let number = document.getElementById("number").value;
    document.getElementById("result").textContent = names[number];
});