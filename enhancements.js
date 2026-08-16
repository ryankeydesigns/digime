const siteLoader = document.getElementById('siteLoader');
if (siteLoader) {
  window.setTimeout(() => {
    siteLoader.classList.add('is-exiting');
    document.body.classList.remove('is-loading');
    siteLoader.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => siteLoader.remove(), 850);
  }, 5000);
} else {
  document.body.classList.remove('is-loading');
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

document.querySelectorAll('.section').forEach((section, index) => {
  section.classList.add('reveal');
  section.style.transitionDelay = Math.min(index * 55, 180) + 'ms';
  revealObserver.observe(section);
});

if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const hero = document.querySelector('.hero');
  const portrait = hero?.querySelector('.portrait');

  if (hero && portrait) {
    let frame = 0;
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const py = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rotateY = (px - 0.5) * 2.4;
        const rotateX = (py - 0.5) * -2;
        hero.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        hero.style.setProperty('--hero-x', (px * 100) + '%');
        hero.style.setProperty('--hero-y', (py * 100) + '%');
        hero.style.setProperty('--portrait-x', ((px - 0.5) * -8) + 'px');
        hero.style.setProperty('--portrait-y', ((py - 0.5) * -5) + 'px');
      });
    });

    hero.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      hero.style.transform = '';
      hero.style.setProperty('--portrait-x', '0px');
      hero.style.setProperty('--portrait-y', '0px');
    });
  }

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
}
