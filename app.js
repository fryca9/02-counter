const value = document.querySelector("#value");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

let num = 0;

function updateValue() {
  value.textContent = num;

  if (num > 0) {
    value.style.color = "green";
  } else if (num < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}

increase.addEventListener("click", (e) => {
  num += 1;
  updateValue();
});

decrease.addEventListener("click", (e) => {
  num -= 1;
  updateValue();
});

reset.addEventListener("click", (e) => {
  num = 0;
  updateValue();
});
