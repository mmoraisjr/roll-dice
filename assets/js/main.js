const inputDice = document.querySelector(".input__dice");
const inputFace = document.querySelector(".input__face");
const showDices = document.querySelector(".dices");
const showSum = document.querySelector(".result");
const btn = document.querySelector(".roll");

btn.addEventListener("click", () => addDice());

const addDice = () => {
  const dices = inputDice.value;
  const faces = inputFace.value;
  var faceDice;
  var sumDices = 0;
  
  if (dices > 10) {
    console.log("o número máximo de dados é 10.");
  } else {
    for (let i = 0; i < dices; i++) {
      faceDice = Math.floor(Math.random() * faces) + 1;
      console.log(faceDice);
      const newDice = document.createElement("p");
      newDice.textContent = faceDice;
      showDices.appendChild(newDice);
      sumDices += faceDice;
      console.log(sumDices);
    }
  }
  const showSumDices = document.createElement("p");
  showSumDices.textContent = sumDices;
  showSum.appendChild(showSumDices);
};
