export default (() => {
  const modalE = document.querySelector(".modal");
  const backE = document.querySelector(".back");
  const letterE = document.querySelector(
    ".btn_letter",
  );

  var timing;

  letterE.addEventListener("click", () => {
    modalE.classList.remove("slide_up");
    modalE.classList.add("slide_down");
    timing = setTimeout(
      () =>
        document
          .querySelector(".content")
          .click(),
      15000,
    );
  });

  backE.addEventListener("click", () => {
    modalE.classList.remove("slide_down");
    modalE.classList.add("slide_up");
  });
})();
