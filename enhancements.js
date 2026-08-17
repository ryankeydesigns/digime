const siteLoader = document.getElementById('siteLoader');
if (siteLoader) {
  window.setTimeout(() => {
    siteLoader.classList.add('is-exiting');
    document.body.classList.remove('is-loading');
    siteLoader.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => siteLoader.remove(), 850);
  }, 3000);
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


const progressBar = document.createElement('div');
progressBar.className = 'interaction-progress';
progressBar.setAttribute('aria-hidden', 'true');
document.body.appendChild(progressBar);

const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.type = 'button';
backToTop.setAttribute('aria-label', 'Back to top');
backToTop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 6-6 6 6"/></svg>';
document.body.appendChild(backToTop);

let scrollFrame = 0;
const updateScrollUI = () => {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  progressBar.style.setProperty('--scroll-progress', progress.toFixed(4));
  backToTop.classList.toggle('is-visible', window.scrollY > Math.min(700, window.innerHeight * 0.8));
  scrollFrame = 0;
};
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollUI);
}, { passive: true });
window.addEventListener('resize', updateScrollUI, { passive: true });
updateScrollUI();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

const glowTargets = document.querySelectorAll('.contact,.social,.review-card,.client-card,.experience-card,.extra-service-card');
glowTargets.forEach((target) => {
  target.classList.add('interactive-glow');
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    target.addEventListener('pointermove', (event) => {
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--glow-x', (event.clientX - rect.left) + 'px');
      target.style.setProperty('--glow-y', (event.clientY - rect.top) + 'px');
    });
  }
});

document.querySelectorAll('.action,.contact,.social,.review-arrow,.client-arrow,.extra-services__arrow,.extra-service-card__button,.back-to-top').forEach((element) => {
  element.addEventListener('pointerdown', (event) => {
    if (reduceMotion) return;
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'interaction-ripple';
    ripple.style.left = (event.clientX - rect.left) + 'px';
    ripple.style.top = (event.clientY - rect.top) + 'px';
    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });
});

if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.action,.review-arrow,.client-arrow,.extra-services__arrow').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
      element.style.transform = `translate(${x}px,${y - 2}px)`;
    });
    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
    });
  });
}

document.querySelectorAll('.reviews,.clients-slider,.extra-services__slider').forEach((slider) => {
  let sliderTimer;
  slider.addEventListener('scroll', () => {
    slider.classList.add('slider-active');
    window.clearTimeout(sliderTimer);
    sliderTimer = window.setTimeout(() => slider.classList.remove('slider-active'), 280);
  }, { passive: true });
});
