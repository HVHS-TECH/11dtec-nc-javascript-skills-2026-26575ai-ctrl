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