// スター生成
const starContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  starContainer.appendChild(star);
}

// スクロール演出
const sections = document.querySelectorAll('.section');

function checkVisible() {
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

function animate() {
  checkVisible();
  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  animate();
});
