$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('input#input_text, textarea#message').characterCounter();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});
