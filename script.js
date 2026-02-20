// ─── SMOOTH SCROLL HELPER ─────────────────────────────────────────────
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────
setTimeout(() => {
  const fill = document.getElementById('slotFill');
  if (fill) fill.style.width = '55%';
}, 600);

// ─── COUNTDOWN TO MARCH 31, 2026 ──────────────────────────────────────
const deadline = new Date('2026-03-31T23:59:59');
const pad = n => String(n).padStart(2, '0');

function tick() {
  const d = deadline - new Date();
  if (d <= 0) {
    ['days', 'hours', 'mins', 'secs'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }
  const days  = document.getElementById('days');
  const hours = document.getElementById('hours');
  const mins  = document.getElementById('mins');
  const secs  = document.getElementById('secs');
  if (days)  days.textContent  = pad(Math.floor(d / 86400000));
  if (hours) hours.textContent = pad(Math.floor((d % 86400000) / 3600000));
  if (mins)  mins.textContent  = pad(Math.floor((d % 3600000) / 60000));
  if (secs)  secs.textContent  = pad(Math.floor((d % 60000) / 1000));
}
tick();
setInterval(tick, 1000);

// ─── SCROLL REVEAL ────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── STICKY NAV SHADOW ────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 24px rgba(27,28,58,0.10)'
      : 'none';
  }
});
