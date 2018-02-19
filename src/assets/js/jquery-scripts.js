$(document).ready(function () {
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
        dots: true,
        nextArrow: '<div class="index-slider__next"></div>',
        prevArrow: '<div class="index-slider__prev"></div>',
        arrows: true
    });

    $('div.card-inner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
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

    $(".card-inner-fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            helpers: {
                thumbs: {
                    width  : 40,
                    height : 40,
                    source  : function(current) {
                        return $(current.element).data('thumbnail');
                    }
                }
            }
        });

    //custom scroll
    $('div.aside-feedback__top, ul.aside-nav, ul.aside-nav ul').jScrollPane({
        autoReinitialise: true
    });

    //mask
    $('.js-phone-mask').inputmask("+7 (999) 999-99-99");

    //custom select for filter
    $('.js-example-basic-multiple').select2({
        placeholder: 'Выберите параметры',
        language: 'ru',
        width: "100%",
        allowClear: true
    });

    //Обрезка длины текста
    $('.useful-information__item-txt').liTextLength({
        length: 110,         //Видимое кол-во символов
        afterLength: '...',  //Текст после видимого содержания
        fullText:false       //Добавить ссылку для отображения скрытого текста
    });

    //табы
    $("#tabs-content div").hide(); // Скрытое содержимое
    $("#tabs-list li:first").attr("id","current"); // Какой таб показать первым
    $("#tabs-content div:first").fadeIn(); // Показ первого контента таба

    $('#tabs-list a').click(function(e) {
        e.preventDefault();
        $("#tabs-content div").hide(); //Скрыть всё содержимое
        $("#tabs-list li").attr("id",""); //Сброс идентификаторов
        $(this).parent().attr("id","current"); // Активация идентификаторов
        $('#' + $(this).attr('title')).fadeIn(); // Показать содержимое текущей вкладки
    });

});





