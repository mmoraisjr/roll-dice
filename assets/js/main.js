var inputDice = document.querySelector(".input__dice");
var inputFace = document.querySelector(".input__face");
var showDices = document.querySelector(".dices");
var btn = document.querySelector(".roll");

console.log(inputDice);
console.log(inputFace);

var dices;
var faces;

btn.addEventListener("click", () => addDice());

const addDice = () => {
  dices = inputDice.value;
  faces = inputFace.value;
  ok = btn.value;

  console.log(dices);
  console.log(faces);
};

console.log(dices);
console.log(faces);
