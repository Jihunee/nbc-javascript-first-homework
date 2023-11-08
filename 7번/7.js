const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const Interval = setInterval(function () {
  count = count + 1;
  timer.innerHTML = count;
  if (count === 10) {
    clearInterval(Interval);
  }
}, 1000);
