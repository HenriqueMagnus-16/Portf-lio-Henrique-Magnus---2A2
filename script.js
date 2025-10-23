
const toggle = document.getElementById('darkToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggle.innerHTML = '<i data-lucide="sun"></i>';
} else {
  toggle.innerHTML = '<i data-lucide="moon"></i>';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.innerHTML = isDark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';
  lucide.createIcons();
});

const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

lucide.createIcons();
