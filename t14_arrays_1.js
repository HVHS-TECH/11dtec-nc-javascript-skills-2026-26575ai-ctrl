function getFormInput(event){
    event.preventDefault();
    let number = Number(document.getElementById("number").value);
    let names = ["Airi", "Lily", "Ella", "Isabella", "Emily", "Olivia"];
    document.getElementById("result").textContent = names[number];
}



