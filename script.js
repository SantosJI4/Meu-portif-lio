// script.js — Interações leves (tema, menu, UX)
(function () {
  const html = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const themeBtn = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  // Ano no rodapé
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Persistência de tema
  const storageKey = 'theme-preference';
  const getPreference = () => localStorage.getItem(storageKey) || 'auto';
  const setPreference = (value) => localStorage.setItem(storageKey, value);

  function applyTheme(pref) {
    // auto remove data-theme para seguir prefers-color-scheme
    if (pref === 'auto') {
      html.removeAttribute('data-theme');
      return;
    }
    html.setAttribute('data-theme', pref);
  }

  applyTheme(getPreference());

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = getPreference();
      const next = current === 'light' ? 'dark' : current === 'dark' ? 'auto' : 'light';
      setPreference(next);
      applyTheme(next);
      themeBtn.setAttribute('aria-label', `Tema: ${next}`);
      themeBtn.textContent = 'Tema';
    });
  }

  // Menu mobile
  if (navToggle && navList) {
    function toggleMenu() {
      const open = navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    }
    navToggle.addEventListener('click', toggleMenu);
    navList.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navList.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Realçar link ativo conforme seção visível
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  const byId = (id) => Array.from(navLinks).find((a) => a.getAttribute('href') === `#${id}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = byId(id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'page');
        }
      });
    },
    { rootMargin: '-50% 0px -45% 0px', threshold: 0.1 }
  );

  sections.forEach((s) => observer.observe(s));
})();
