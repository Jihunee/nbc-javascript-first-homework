const number = document.querySelectorAll(".number");
let count = 1;

for (let i = 0; i < number.length; i++) {
  number[i].innerHTML = count++ + 10;
}
