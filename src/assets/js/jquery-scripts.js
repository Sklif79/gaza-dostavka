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
});
