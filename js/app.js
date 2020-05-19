var mainNav = document.querySelector('.main_header--navigation');
var navTaggle = document.querySelector('.button_toggle');

navTaggle.addEventListener('click', function () {
  if (mainNav.classList.contains('nav_closed')) {
    mainNav.classList.remove('nav_closed');
    mainNav.classList.add('nav_opened');
    navTaggle.classList.remove('toggle_closed');
    navTaggle.classList.add('toggle_opened');
  } else {
    mainNav.classList.remove('nav_opened');
    mainNav.classList.add('nav_closed');
    navTaggle.classList.remove('toggle_opened');
    navTaggle.classList.add('toggle_closed');
  }
});