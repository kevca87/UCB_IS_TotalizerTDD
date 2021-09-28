
const f = require('./App');

const first = document.querySelector("#first-number");
const second = document.querySelector("#second-number");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const state = document.querySelector("#state-select");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const state_abb = state.value;
  let state_tax = f.tax_by_state(state_abb);
  div.innerHTML = "<p>" + f.totalize(firstNumber, secondNumber,state_tax) + "</p>";
});
