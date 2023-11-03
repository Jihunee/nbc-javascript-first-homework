const btn = document.querySelector(".btn");

const printprompt = () => {
  const test = prompt("아무거나 입력해주세요.");

  alert(test);
};

btn.addEventListener("click", printprompt);
