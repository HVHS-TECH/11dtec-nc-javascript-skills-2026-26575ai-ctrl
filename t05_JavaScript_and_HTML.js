// This file produces a small HTML snippet and behavior when loaded in a browser environment.
document.body.innerHTML = `
  <h1>JavaScript</h1>
  <h2>The onclick Event</h2>
  <p id="demo">Click the button to change the layout of this paragraph</p>
  <button id="btn">Click Me!</button>
`;

function myFunction() {
  const x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

document.getElementById('btn').addEventListener('click', myFunction);
/****************************
Name of the task:
****************************/

console.log("Running t01_introduction.js")


//Variables
var name ="Airi"
var age=16;
var isStudent=true;
let pocketMoney=6;
var num1=10;
var num2=16;
var num3=pocketMoney/2;
var num4=num3+3;

console.log("Hi"+name);
console.log("As of you are "+age+"years old");
console.log("In 10 years you will be"+num1+num2);
console.log("You have"+pocketMoney+"dollars");
console.log("You spend half of your money, now you have"+num3);
console.log("Then you get $3, now you have"+num4);

<!DOCTYPE html>
<html>
<body>

<p>Bla bla bla</p>

<script>
document.write(Date());
</script>

</body>
</html>