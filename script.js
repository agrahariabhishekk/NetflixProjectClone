let allQuestion = document.querySelectorAll(".NetflixQuestion");
allQuestion.forEach((v, index) => {
  v.addEventListener("click", () => {
    let answer = v.nextElementSibling;
    let icon = v.children[1];

    // Toggle the clicked question's answer and icon
    answer.classList.toggle("max-h-0");
    answer.classList.toggle("max-h-[1000px]");
    answer.classList.toggle("p-[20px]");
    icon.classList.toggle("rotate-45");

    // Hide all other answers and reset their icons
    allQuestion.forEach((el, i) => {
      if (i != index) {
        el.nextElementSibling.classList.remove("max-h-[1000px]", "p-[20px]");
        el.nextElementSibling.classList.add("max-h-0");
        el.children[1].classList.remove("rotate-45");
      }
    });
  });
});