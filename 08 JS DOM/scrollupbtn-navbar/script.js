const navMenu = document.querySelector('.nav_menu');
const navToggle = document.querySelector('.menu_toggle');
const navClose = document.querySelector('.menu_close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.top = '-300px';
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.style.top = '';
    })
}

// scroll up button
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 450) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);