const inputDice = document.querySelector(".input__dice");
const inputFace = document.querySelector(".input__face");
const showDices = document.querySelector(".dices");
const showSum = document.querySelector(".result");
const btn = document.querySelector(".roll");
// const faces = document.querySelectorAll(".face");
const oldDices = JSON.parse(localStorage.getItem("oldDices")) || [];

btn.addEventListener("click", () => addDice());

const addDice = () => {
  const dices = inputDice.value;
  const faces = inputFace.value;
  var faceDice;
  var sumDices = 0;

  showDices.innerHTML = "";
  showSum.innerHTML = "";

  if (dices > 10) {
    console.log("O número máximo de dados é 10.");
    return
  }if(dices == 0 || faces == 0 || dices === "" || faces === ""){
    console.log("Preencha os campos com um valor válido");
    return
  }else{
    for (let i = 0; i < dices; i++) {
      faceDice = Math.floor(Math.random() * faces) + 1;
      const newDice = document.createElement("p");
      newDice.classList.add("dices__face");
      newDice.textContent = faceDice;
      showDices.appendChild(newDice);
      sumDices += faceDice;
    }
  }

  const showSumDices = document.createElement("p");
  showSumDices.textContent = sumDices;
  showSum.appendChild(showSumDices);

  // função para resgatar somatória dos dados já lançacos
  // oldDices.push(sumDices);
  // localStorage.setItem("oldDices", JSON.stringify(oldDices));
  // for (let i = 0; i < oldDices.length; i++) {
  //   const showSumDices = document.createElement("p");
  //   // console.log(oldDices[i]);
  //   showSumDices.textContent = oldDices[i];
  //   showSum.appendChild(showSumDices);
  // }
};
