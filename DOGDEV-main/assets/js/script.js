//menu
let menuOpener = document.querySelector('.menu-opener');
//nav
let nav = document.querySelector('header nav');
//ouvinte para o eventoclick do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened');
        menuOpener.querySelector('.close-icon') .style .display='none';
        menuOpener.querySelector('.hamburger-icon') .style .display='flex';
    }else{
        nav.classList.add('opened');
        menuOpener.querySelector('.close-icon') .style .display='flex';
        menuOpener.querySelector('.hamburger-icon')  .style .display='none';
    }
});