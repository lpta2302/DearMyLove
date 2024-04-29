export default (() => {
  const words = [
    "I",
    "L",
    "O",
    "V",
    "E",
    "You",
    "3004",
  ];

  const contentE =
    document.querySelector(".content");
  contentE.addEventListener("click", () => {
    const firstWordE = document.querySelectorAll(
      ".first-word",
    );

    firstWordE.forEach((e, index) => {
      e.classList.add("fade-in");
      e.innerHTML = words[index];
    });
    setTimeout(() => {
      firstWordE.forEach((e) =>
        e.classList.add("change-color"),
      );
    }, 1000);
  });
})();
