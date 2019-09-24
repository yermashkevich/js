// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/*

Инициализация плагинов для главной страницы (nethouse.ru)

*/

$(document).ready(function(){

    //Init testimonials slider
    (function(){

        $(".index-feedback__testimonials-slider").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            dotsClass: "index-feedback__testimonials-dots",
            infinite: true,
            fade: true,
            speed: 800,
            lazyLoad:  'progressive',
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        adaptiveHeight: true
                    }
                }
            ]
        });
        // "Fade" option, no background = ugly result
        // fix it, link https://github.com/kenwheeler/slick/issues/365
        $('.index-feedback__testimonials-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.index-feedback__testimonials-slider [data-slick-index="' + currentSlide + '"]').fadeTo(50,0);
        });


    })();

    // Init plugin for animations
    new WOW({mobile: false}).init();

    // динамичный лэйбл

    $(".js-input").on("focus", function() {
        $(this).prev(".js-label").addClass("active");
    });

    $(".js-input").on("blur", function() {
        if($(this).val().length == 0) {
            $(this).prev(".js-label").removeClass("active");
        }
    });

    $(".index-hero__slider").slick({
        autoplay: true,
        autoplaySpeed: 8000,
        draggable: false,
        fade: true,
        infinite: true,
        arrows: true,
        nextArrow: ".index-hero__slick-next",
        prevArrow: ".index-hero__slick-prev",
        dots: true,
        dotsClass: "index-hero__dots",
        lazyLoad:  'progressive',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    //text-toogle
    $('.index-trust__toggle').on('click', function() {
        $(this).addClass('index-trust__toggle--active');
        $('.index-trust__spoiler').slideToggle();
    });
});

