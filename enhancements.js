const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section').forEach((section, index) => {
  section.classList.add('reveal');
  section.style.transitionDelay = Math.min(index * 80, 240) + 'ms';
  revealObserver.observe(section);
});

document.querySelectorAll('.experience-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -4;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    card.style.transform = `translateY(-7px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
