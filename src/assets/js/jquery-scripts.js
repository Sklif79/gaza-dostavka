$(document).ready(function () {
    $('div.partners-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<div class="partners-slider__next"></div>',
        prevArrow: '<div class="partners-slider__prev"></div>',
        arrows: true
    });

    //слайдер на главной
    $('div.index-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="index-slider__next"></div>',
        prevArrow: '<div class="index-slider__prev"></div>',
        arrows: true
    });

    //слайдер карточки товара
    $('div.card-inner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        asNavFor: '.card-inner__pager',
        focusOnSelect: true
    });

    $('div.card-inner__pager').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        arrows: false,
        infinite: false,
        asNavFor: '.card-inner__slider',
        focusOnSelect: true
    });

    //слайдер на фотогалереи
    $('div.shipment-gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="shipment-slider__next"></div>',
        prevArrow: '<div class="shipment-slider__prev"></div>',
        arrows: true
    });

    //слайдер отзывов
    $('div.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="review-slider__next"></div>',
        prevArrow: '<div class="review-slider__prev"></div>',
        arrows: true
    });

    $('div.article-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="article-slider__next"></div>',
        prevArrow: '<div class="article-slider__prev"></div>',
        arrows: true
    });

    //слайдер брендов в описании раздела
    $('div.page-description-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false
    });

    //fancybox-popup
    $('.js_fancybox-img').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.65)'
                }
            }
        }
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

    //слайдер с миниатюрами для главной
    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        padding: 43,
        helpers: {
            thumbs: {
                width: 75,
                height: 60
            }
        }
    });

    //custom scroll
    $('div.aside-feedback__top, ul.aside-nav, ul.aside-nav ul').jScrollPane({
        autoReinitialise: true
    });

    //mask showMaskOnHover
    $('.js-phone-mask').inputmask({
        "mask": "+7 (999) 999-99-99",
        "showMaskOnHover": false
    });

    //custom select for filter
    $('.js-example-basic-multiple').select2({
        placeholder: 'Выберите параметры',
        width: "100%",
        allowClear: true,
        theme: 'classic'
    });

    //custom select for calculator
    $('.js_distance').select2({
        width: "100%",
        theme: 'classic',
        minimumResultsForSearch: Infinity
    });

    //custom select for additional-equipment
    $('.js_additional-equipment').select2({
        placeholder: 'Вид оборудования',
        width: 254,
        theme: 'classic',
        minimumResultsForSearch: Infinity
    });

    //custom select for counters with gray label
    $('.js_select-count').select2({
        width: 90,
        theme: 'classic',
        minimumResultsForSearch: Infinity
    }).css({'opacity': '1'});

    //Обрезка длины текста
    $('.useful-information__item-txt').liTextLength({
        length: 110,         //Видимое кол-во символов
        afterLength: '...',  //Текст после видимого содержания
        fullText: false       //Добавить ссылку для отображения скрытого текста
    });

    //табы
    $("#tabs-content div").hide(); // Скрытое содержимое
    $("#tabs-list li:first").attr("id", "current"); // Какой таб показать первым
    $("#tabs-content div:first").fadeIn(); // Показ первого контента таба

    $('#tabs-list a').click(function (e) {
        e.preventDefault();
        $("#tabs-content div").hide(); //Скрыть всё содержимое
        $("#tabs-list li").attr("id", ""); //Сброс идентификаторов
        $(this).parent().attr("id", "current"); // Активация идентификаторов
        $('#' + $(this).attr('data-title')).fadeIn(); // Показать содержимое текущей вкладки
    });


    if (window.ymaps) {
        ymaps.ready(init);
    }
});

function init() {
    var mapObj;
    mapObj = {
        center: [59.93424151987533, 30.334370355622525],
        zoom: 13,
        controls: []
    };

    var myMap = new ymaps.Map('map-station', mapObj, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set({
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/assets/images/map-marker.png',
        iconImageSize: [30, 36],
        iconImageOffset: [-16, -40],
        balloonShadow: false,
        // balloonOffset: [-200, -40]
    });
    objectManager.clusters.options.set('preset', 'blue#redClusterIcons');
    myMap.geoObjects.add(objectManager);

    //чтобы иконка стала активной, добавить нужному <i> класс active
    $.ajax({
        url: "/assets/js/data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

    document.addEventListener('click', showBal);


    //центрирование крты по клику
    function showBal(e) {
        var dataCoords, coords = [];

        if (e.target.classList.contains('map-filter__location')) {
            dataCoords = e.target.getAttribute('data-location').split(',');

            dataCoords.forEach(function (item) {
                coords.push(parseFloat(item));
            });

            myMap.setCenter(coords, 13, {
                checkZoomRange: true
            });
        }
    }
}











