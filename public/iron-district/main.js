// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // Scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));

  // Active nav highlight
  const page = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
});