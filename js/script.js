$(document).ready(function() {
    $navbar = $('#navbar');
    var navBarOffset = $navbar.offset().top;

    $(window).scroll(function(e) {
        $navbar = $('#navbar');
        if ($(this).scrollTop() >= navBarOffset) {
            console.log('bottom');
            $navbar.addClass('fixed-top');
        }

        if ( $(this).scrollTop() < navBarOffset ) {
            console.log('top');
            $navbar.removeClass('fixed-top');
        }
    })

    $('button[data-toggle="my-collapse"]').click(function() {
        $navbarContent = $('#navbarSupportedContent');
        $overlay = $('.collapse-overlay');
        if (! $navbarContent.hasClass('show')) {
            $navbarContent.animate({
                marginLeft:'0'
            },200).addClass('show');
            $(this).html('<i class="fas fa-times text-white"></i>');
            $overlay.fadeIn();
        }
        else {
            $navbarContent.animate({
                marginLeft:'-100vw'
            },200).removeClass('show');
            $(this).html('<i class="fas fa-bars text-white"></i>');
            $overlay.fadeOut();
        }

    });
})