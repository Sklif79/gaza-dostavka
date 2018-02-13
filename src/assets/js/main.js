ready(function () {
    // let el = document.querySelector('.aside-nav');
    //
    // el.addEventListener('mouseover', handlerNavMouseover);
    // el.addEventListener('mouseout', handlerNavMouseout);
    //
    //
    // //обработчик делегирования по ховера
    // let currentElem = null;
    //
    // function handlerNavMouseover(event) {
    //     let target = event.target;
    //
    //     if (currentElem) return;
    //
    //     // уж не на TD ли?
    //     while (target != this) {
    //         if (target.tagName == 'LI') break;
    //         target = target.parentNode;
    //     }
    //
    //     if (target == this) return;
    //
    //     currentElem = target;
    //
    //     console.log('навели')
    //     // target.style.background = 'pink';
    // }
    //
    // function handlerNavMouseout(event) {
    //     if (!currentElem) return;
    //
    //     let relatedTarget = event.relatedTarget;
    //
    //     if (relatedTarget) {
    //         while (relatedTarget) {
    //             if (relatedTarget == currentElem) return;
    //             relatedTarget = relatedTarget.parentNode;
    //         }
    //     }
    //
    //     // произошло событие mouseout, курсор ушёл
    //     // currentElem.style.background = '';
    //     currentElem = null;
    //     console.log('убрали')
    // }





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


    customPlaceholderInit();

    hoverImages('div.nav-index', 'div.nav-index__item');
    hoverImages('ul.aside-nav', 'a.aside-nav__link');

    preloadImg("data-src-hover");

});

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

//смена изображений по ховеру
function hoverImages(parentEl, hoverEl) {
    var newSrc, src, oldSrc;

    //делегируем события для контейнера
    $(parentEl).on('mouseenter', hoverEl, function () {
        var image = $(this).find('img');
        newSrc = image.attr("data-src-hover");
        oldSrc = image.attr("src");
        src = image.attr("src", newSrc);
    });

    $(parentEl).on('mouseleave', hoverEl, function () {
        $(this).find('img').attr("src", oldSrc);
    });
}

//предзагрузка изображений по data-атрибуту
function preloadImg(dataAttr) {
    var arr = document.querySelectorAll('img[' + dataAttr + ']');

    for (var i = 0; i < arr.length; i++) {
        new Image().src = arr[i].getAttribute(dataAttr);
    }
}

//определение главной страницы
(function () {
    if (location.pathname === '/') $('html, body').addClass('main-page');
})();

//кастомный плейсхолдер
function customPlaceholderInit() {
    var els = $('.custom-placeholder-wrap');
    els.each(function () {
        $(this).on('click', clickHandler);
        $(this).find('input, textarea').on('focus', focusHandler);
    });

    textareaDetect();

    function textareaDetect() {
        els.each(function () {
            var textarea = $(this).find('textarea');
            if (textarea.length) {
                $(this).find('.custom-placeholder').addClass('textarea-custom-placeholder');
            }
        });
    }

    function clickHandler(e) {
        var el = findParent($(e.target), 'custom-placeholder-wrap'),
            input = el.find('input, textarea');
        el.addClass('custom-placeholder-active');
        input
            .focus()
            .focusout(function () {
                var val = $(this).val().trim();
                if (!val) {
                    el.removeClass('custom-placeholder-active');
                }
            });
    }

    function focusHandler(e) {
        var el = findParent($(e.target), 'custom-placeholder-wrap');
        el.addClass('custom-placeholder-active');
        $(e.target).focusout(function () {
            var val = $(this).val().trim();
            if (!val) {
                el.removeClass('custom-placeholder-active');
            }
        });
    }
}

function findParent(el, class_) {
    var parent = el.parent();
    if (parent.hasClass(class_)) {
        return parent;
    }
    else {
        return findParent(parent, class_);
    }
}

//появление после загрузки страницы
$(window).bind('load', function () {
    var hiddenBeforLoad =
            // '.slider-main li, ' +
            '.index-slider__item '
        // '.certificates-element, ' +
        // '.slider-sale '
        ;
    $(hiddenBeforLoad).css({'opacity': '1'})
});




