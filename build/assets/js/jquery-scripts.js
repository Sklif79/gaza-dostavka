$(document).ready(function(){
    $('div.partners-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<div class="partners-slider__next"></div>',
        prevArrow: '<div class="partners-slider__prev"></div>',
        arrows: true
    });

    $('div.index-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="index-slider__next"></div>',
        prevArrow: '<div class="index-slider__prev"></div>',
        arrows: true
    });

    //fancybox-popup
    $('.js-modal').fancybox({
        closeBtn: true,
        minWidth: 385,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.65)'
                }

            }
        }
    });

    //custom scroll
    $('.aside-feedback__top, .aside-nav, .aside-nav ul').jScrollPane({
        autoReinitialise: true
    });

    //mask
    $('.js-phone-mask').inputmask({"mask": "+7 (999) 999-99-99"});


});
