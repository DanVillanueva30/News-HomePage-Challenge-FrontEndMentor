document.addEventListener('DOMContentLoaded', function() {
    runApp();
});
const hamburguer = document.querySelector('.mobile-menu__img');
const mobileClosed = document.querySelector('.mobile-menu__img--closed');
const bar = document.querySelector('.header__bar');
const bodyHidden = document.querySelector('body');

function runApp() {
    eventListeners();
}
function eventListeners() {
    hamburguer.addEventListener('click', mobileMenu);
    mobileClosed.addEventListener('click', mobileMenu);
}

function mobileMenu(e) {
    e.preventDefault();
    const nav = document.querySelector('.navigation');


    if(nav.classList.contains('navigation__open')) {
        nav.classList.remove('navigation__open');
        hamburguer.classList.add('mobile-menu__img--hide');
        mobileClosed.classList.remove('mobile-menu__img--closed');
        bar.classList.add('header__bar--border');
        bodyHidden.classList.add('hidden');
    } else {
        nav.classList.add('navigation__open');
        hamburguer.classList.remove('mobile-menu__img--hide');
        mobileClosed.classList.add('mobile-menu__img--closed');
        bar.classList.remove('header__bar--border');
        bodyHidden.classList.remove('hidden');
    }
}