$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['home', 'ingredientes', 'menu', 'cartas', 'contacto'],
    menu: '#aside-menu',
    fixedElements: '#element1, #redes'
  });
});

