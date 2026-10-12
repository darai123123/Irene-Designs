const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  // Replace this placeholder with your real business email before launch.
  const businessEmail = 'hello@example.com';
  if (businessEmail === 'hello@example.com') {
    status.textContent = 'Demo mode: replace hello@example.com in script.js with your business email before publishing.';
    return;
  }
  const subject = encodeURIComponent(`Website enquiry: ${service}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`);
  status.textContent = 'Opening your email app…';
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
