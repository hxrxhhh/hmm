window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("birthdayMusic");
  music.volume = 0.5;

  // Auto play fix for mobile
  document.body.addEventListener("click", () => {
    if (music.paused) {
      music.play();
    }
  });
});