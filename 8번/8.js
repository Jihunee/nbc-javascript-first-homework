const upBtn = document.querySelector(".up-btn");

const scrollHandel = () => {
  if (scrollY >= 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};

window.addEventListener("scroll", scrollHandel);
