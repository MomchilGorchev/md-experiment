
function preLoad(){
    var loader = $(document.getElementById('main-loader')),
        content = $(document.querySelectorAll('.main-content'));

    setTimeout(function(){
        loader.fadeOut();
        content.removeClass('hidden');
    }, 2000);
}


$(document).ready(function(){
    $('.slider').slider({full_width: true});

    $('.parallax').parallax();

    preLoad();
});