const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
  });