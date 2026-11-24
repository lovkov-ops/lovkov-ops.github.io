// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu on phones: opens and closes the links under the bar
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const setMenu = open => {
    nav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
};
navToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('click', e => {
    if (!nav.contains(e.target)) setMenu(false);
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.style.borderBottomColor = 'rgba(44, 50, 59, 0.5)';
    } else {
        nav.style.borderBottomColor = 'rgba(44, 50, 59, 1)';
    }
});

// Add active state to navigation links
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
    });
});
