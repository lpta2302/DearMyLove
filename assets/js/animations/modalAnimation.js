export default (() => {
  const modalE = document.querySelector(".modal");
  const backE = document.querySelector(".back");
  const letterE = document.querySelector(
    ".btn_letter",
  );

  letterE.addEventListener("click", () => {
    modalE.classList.remove("slide_up");
    modalE.classList.add("slide_down");
  });

  backE.addEventListener("click", () => {
    modalE.classList.remove("slide_down");
    modalE.classList.add("slide_up");
  });
})();
