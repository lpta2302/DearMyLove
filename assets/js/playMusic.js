export default (() => {
  const audioE = document.querySelector("audio");
  audioE.volume = 0.2;
  const timing = setInterval(() => {
    if (audioE.paused) {
      console.log("hi");
      audioE.play();
      if (!audioE.paused) {
        window.clearInterval(timing);
      }
    }
  }, 1000);
})();
