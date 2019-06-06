// animated-div
    $('.animated-div').each(function(){
    var thisPos = $(this).offset().top;
    if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
        }
    });