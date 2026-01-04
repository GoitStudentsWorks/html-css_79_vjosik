const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');
const mobileLinks = mobileMenu.querySelectorAll('.mobile-link, .btn-link');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', navigate);
});

function toggleMenu() {
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}

function navigate(event) {
  const currentLink = event.currentTarget;

  currentLink.classList.add('clicked');

  setTimeout(() => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    currentLink.classList.remove('clicked');
  }, 300);
}
