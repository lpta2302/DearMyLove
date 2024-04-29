export default (() => {
  const yutaE =
    document.querySelector(".yuta img");

  console.log(yutaE);

  const yutaSrc = yutaE.getAttribute("src");

  console.log(yutaSrc);

  setInterval(() => {
    yutaE.setAttribute("src", yutaSrc);
  }, 950);
})();
