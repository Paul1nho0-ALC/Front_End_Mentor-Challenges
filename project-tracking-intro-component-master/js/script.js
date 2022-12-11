function menu_toggle(){
    let menu = document.getElementById('navbar-mobile-nav');


    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        menu.classList.add('closed');
        document.querySelector('.navbar-mobile-button-icon').src = "images/icon-hamburger.svg";
    }else{
        menu.classList.remove('closed')
        menu.classList.add('open');
        document.querySelector('.navbar-mobile-button-icon').src = "images/icon-close.svg";
    }
}