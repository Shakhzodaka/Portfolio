const nav = document.querySelector('.header-nav');
const burger = document.querySelector('.header_burger');
const lists = document.querySelectorAll('.header_menu__items');

burger.addEventListener('click', () =>{
    nav.classList.toggle('open');
})
lists.forEach(elem => {
    elem.addEventListener('click', () => {
    nav.classList.remove('open')
})
})

