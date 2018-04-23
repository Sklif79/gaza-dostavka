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
        "mask":"+7 (999) 999-99-99",
        "showMaskOnHover":false
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

    //map
    // ymaps.ready(function () {
    //     // Создание экземпляра карты и его привязка к созданному контейнеру.
    //     var myMap = new ymaps.Map('map', {
    //             center: [55.751574, 37.573856],
    //             zoom: 9,
    //             behaviors: ['default', 'scrollZoom']
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    //
    //         // Создание макета балуна на основе Twitter Bootstrap.
    //         MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
    //             '<div class="popover top">' +
    //             '<a class="close" href="#">&times;</a>' +
    //             '<div class="arrow"></div>' +
    //             '<div class="popover-inner">' +
    //             '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
    //             '</div>' +
    //             '</div>', {
    //                 /**
    //                  * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
    //                  * @function
    //                  * @name build
    //                  */
    //                 build: function () {
    //                     this.constructor.superclass.build.call(this);
    //
    //                     this._$element = $('.popover', this.getParentElement());
    //
    //                     this.applyElementOffset();
    //
    //                     this._$element.find('.close')
    //                         .on('click', $.proxy(this.onCloseClick, this));
    //                 },
    //
    //                 /**
    //                  * Удаляет содержимое макета из DOM.
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
    //                  * @function
    //                  * @name clear
    //                  */
    //                 clear: function () {
    //                     this._$element.find('.close')
    //                         .off('click');
    //
    //                     this.constructor.superclass.clear.call(this);
    //                 },
    //
    //                 /**
    //                  * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
    //                  * @function
    //                  * @name onSublayoutSizeChange
    //                  */
    //                 onSublayoutSizeChange: function () {
    //                     MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
    //
    //                     if(!this._isElement(this._$element)) {
    //                         return;
    //                     }
    //
    //                     this.applyElementOffset();
    //
    //                     this.events.fire('shapechange');
    //                 },
    //
    //                 /**
    //                  * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
    //                  * @function
    //                  * @name applyElementOffset
    //                  */
    //                 applyElementOffset: function () {
    //                     this._$element.css({
    //                         left: -(this._$element[0].offsetWidth / 2),
    //                         top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
    //                     });
    //                 },
    //
    //                 /**
    //                  * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
    //                  * @function
    //                  * @name onCloseClick
    //                  */
    //                 onCloseClick: function (e) {
    //                     e.preventDefault();
    //
    //                     this.events.fire('userclose');
    //                 },
    //
    //                 /**
    //                  * Используется для автопозиционирования (balloonAutoPan).
    //                  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
    //                  * @function
    //                  * @name getClientBounds
    //                  * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
    //                  */
    //                 getShape: function () {
    //                     if(!this._isElement(this._$element)) {
    //                         return MyBalloonLayout.superclass.getShape.call(this);
    //                     }
    //
    //                     var position = this._$element.position();
    //
    //                     return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
    //                         [position.left, position.top], [
    //                             position.left + this._$element[0].offsetWidth,
    //                             position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
    //                         ]
    //                     ]));
    //                 },
    //
    //                 /**
    //                  * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
    //                  * @function
    //                  * @private
    //                  * @name _isElement
    //                  * @param {jQuery} [element] Элемент.
    //                  * @returns {Boolean} Флаг наличия.
    //                  */
    //                 _isElement: function (element) {
    //                     return element && element[0] && element.find('.arrow')[0];
    //                 }
    //             }),
    //
    //         // Создание вложенного макета содержимого балуна.
    //         MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
    //             '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
    //             '<div class="popover-content">$[properties.balloonContent]</div>'
    //         ),
    //
    //         // Создание метки с пользовательским макетом балуна.
    //         myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //             balloonHeader: 'Заголовок балуна',
    //             balloonContent: 'Контент балуна'
    //         }, {
    //             balloonShadow: false,
    //             balloonLayout: MyBalloonLayout,
    //             balloonContentLayout: MyBalloonContentLayout,
    //             balloonPanelMaxMapArea: 0,
    //             // Не скрываем иконку при открытом балуне.
    //             hideIconOnBalloonOpen: false,
    //             // И дополнительно смещаем балун, для открытия над иконкой.
    //             // balloonOffset: [3, -40]
    //         });
    //
    //     myMap.geoObjects.add(myPlacemark);
    // });
    //
    // $(function () {
    //     $('#set-balloon-header').click(function () {
    //         window.myPlacemark.properties.set(
    //             'balloonHeader',
    //             'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //             + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    //         );
    //     });
    //     $('#set-balloon-content').click(function () {
    //         window.myPlacemark.properties.set(
    //             'balloonContent',
    //             'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //             + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    //         );
    //     });
    // });
});





