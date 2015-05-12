
function preLoad(){
    var loader = $(document.getElementById('main-loader')),
        content = $(document.getElementById('main-content'));

    setTimeout(function(){
        loader.fadeOut();
        content.removeClass('hidden');
    }, 4000);
}


$(document).ready(function(){
    $('.slider').slider({full_width: true});

    preLoad();
});