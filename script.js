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
// Music fix
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("birthdayMusic");
  music.volume = 0.5;

  document.body.addEventListener("click", () => {
    if (music.paused) music.play();
  });

  // Typing effect
  const text = "Wishing you all the love, laughter, and unforgettable memories. Today is YOUR day, Barsha!";
  const typed = document.getElementById("typed-text");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typed.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }

  typeText();

  // Fireworks
  initFireworks();
});

function initFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle(x, y) {
    const colors = ["#ff007b", "#ff5db1", "#ffffff"];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x,
        y,
        vx: random(-5, 5),
        vy: random(-5, 5),
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      if (p.alpha <= 0) particles.splice(index, 1);
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  setInterval(() => {
    const x = random(100, canvas.width - 100);
    const y = random(100, canvas.height / 2);
    createParticle(x, y);
  }, 1500);

  draw();
}