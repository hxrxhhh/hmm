// Photo slider
let currentPhoto = 0;
const photos = document.querySelectorAll('.photo');

setInterval(() => {
    photos[currentPhoto].classList.remove('active');
    currentPhoto = (currentPhoto + 1) % photos.length;
    photos[currentPhoto].classList.add('active');
}, 3000);

// Create hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Create particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = particle.style.height = Math.random() * 5 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('particles').appendChild(particle);

    setTimeout(() => particle.remove(), 5000);
}

setInterval(createParticle, 50);

// Auto-play music with user interaction
document.addEventListener('click', function() {
    const audio = document.getElementById('birthdaySong');
    audio.play();
}, { once: true });
