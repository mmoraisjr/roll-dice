const inputDice = document.querySelector(".input__dice");
const inputFace = document.querySelector(".input__face");
const showDices = document.querySelector(".dices");
const btn = document.querySelector(".roll");

btn.addEventListener("click", () => addDice());

const addDice = () => {
  const dices = inputDice.value;
  const faces = inputFace.value;
  var result;

  if (dices > 10) {
    console.log("o número máximo de dados é 10.");
  } else {
    for (let i = 0; i < dices; i++) {
      result = Math.floor(Math.random() * faces) + 1;
      console.log(result);
      const newDice = document.createElement("p");
      newDice.classList.add("square-dice")
      newDice.textContent = result;
      newDice.appendChild(showDices);
    }
  }
  const total = document.createElement("p");
  total.classList.add("total");
  total.textContent = result;
};
