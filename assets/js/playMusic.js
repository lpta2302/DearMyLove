export default (() => {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const audio =
        document.querySelector("audio");
      const isAudioPlaying = localStorage.getItem(
        "isAudioPlaying",
      );

      if (isAudioPlaying === "true") {
        audio.play();
      }

      audio.addEventListener("play", function () {
        localStorage.setItem(
          "isAudioPlaying",
          "true",
        );
      });

      audio.addEventListener(
        "pause",
        function () {
          localStorage.setItem(
            "isAudioPlaying",
            "false",
          );
        },
      );

      window.addEventListener(
        "beforeunload",
        function () {
          audio.pause();
        },
      );
    },
  );
})();
