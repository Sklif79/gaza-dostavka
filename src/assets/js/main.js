ready(function () {
    customPlaceholderInit();
    tooltipClick();
    asideNav();
    asideFidback();
    mainPage();

    hoverImages('div.nav-index', 'div.nav-index__item');
    hoverImages('ul.aside-nav', '.aside-nav__link');

    preloadImg("data-src-hover");

    $('.three-columns__title').setMaxHeights();
    $('.four-columns__title').setMaxHeights();
    $('.additional-equipment__name').setMaxHeights();

    $(window).resize(function () {
        setTimeout(function () {
            $('.three-columns__title').css('height', 'auto').setMaxHeights();
            $('.four-columns__title').css('height', 'auto').setMaxHeights();
        }, 500);
    });
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
function isMainPage() {
    let result = (location.pathname === '/') ? true : false;
    return result;
}

//изменение стилей для главной страницы
function mainPage() {
    if (isMainPage()) {
        $('html, body').addClass('main-page');
        $('.aside').removeClass('moved overlay-mask');
    }

}

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
        '.filter-section, ' +
        '.index-slider__item ' +
        '.card-inner__pager__img, ' +
        '.card-inner__slider-img';

    $(hiddenBeforLoad).css({'opacity': '1'})
});

//tooltip-click
function tooltipClick() {
    let $tooltip = $('.tooltip-click');

    if ($tooltip.length) {


        $tooltip.on('click', function (e) {
            if ($(e.target).hasClass('tooltip-click__close')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    }
}

var asideNav = function () {
    var asideNav = {
        $ul: $('ul.aside-nav > li > ul'),
        $aside: $('div.aside'),
        $content: $('div.content'),
        width: 280,

        appendFirstItemNav() {
            var $asideNavUl = document.querySelectorAll('.aside-nav ul'),
                li,
                $asideNavLink,
                liInnerText;

            for (var i = 0; i < $asideNavUl.length; i++) {
                $asideNavLink = $asideNavUl[i].parentElement.getElementsByTagName('a')[0];
                $asideNavUl[i].parentElement.classList.add('js-aside-nav__dropdown');

                if ($asideNavLink.classList.contains('aside-nav__link')) {
                    liInnerText = $asideNavLink.getElementsByClassName('aside-nav__txt')[0]
                        .textContent;
                } else {
                    liInnerText = $asideNavLink.textContent;
                }

                li = document.createElement('li');
                li.innerHTML = liInnerText;
                $asideNavUl[i].insertBefore(li, $asideNavUl[i].firstChild)
            }
        },

        setLeftPositionNav() {
            var asideNavEL = document.querySelectorAll('.aside-nav > li');

            for (var i = 0; i < asideNavEL.length; i++) {
                enumChildNodes(asideNavEL[i], 1);
            }
        },

        asideHover() {
            var self = this,
                $asideTextBlock =
                    $('span.aside-nav__txt, span.aside-callback__txt, a.aside-callback__link img');


            this.$aside.hover(
                function () {
                    if (!isMainPage()) {
                        self.$aside.removeClass('moved');

                        setTimeout(function () {
                            if (!self.$aside.hasClass('moved')) {
                                $asideTextBlock.fadeIn();
                            }
                        }, 400);

                        setTimeout(function () {
                            self.$aside.removeClass('overlay-mask')
                        }, 600);

                        self.$content.addClass('js-aside-hover');

                    } else {
                        self.$content.addClass('js-aside-hover');
                    }
                },

                function () {
                    if (!$('.aside-feedback').hasClass('js-active')) {
                        self.$content.removeClass('js-aside-hover');
                    }

                    if (!isMainPage()) {
                        self.$aside.addClass('overlay-mask');
                        $asideTextBlock.hide();


                        setTimeout(function () {
                            self.$aside.addClass('moved');
                            $asideTextBlock.hide();
                        }, 450);

                        setTimeout(function () {
                            self.$aside.addClass('overlay-mask');
                        }, 650);
                    }

                    // self.$content.removeClass('js-aside-hover');
                }
            )
        },
    };

    asideNav.setLeftPositionNav();
    asideNav.appendFirstItemNav();
    asideNav.asideHover();
};

/**
 * Рекурсивное перечисление дочерних элементов
 *
 * @param DomNode node
 * Родительский элемент, чьи дочерние узлы нужно перечислять.
 * @count integer
 * @return void
 */
function enumChildNodes(node, count) {
    // если нам передали элемент

    if (node && 1 == node.nodeType) {
        // берем его первый дочерний узел
        var child = node.firstElementChild;

        // пока узлы не закончились
        while (child) {
            // если этот узел является элементом
            if (1 == child.nodeType) {
                // что-то делаем с найденным элементом
                if (child.tagName == "UL") {
                    child.style.left = count * 280 + "px";
                    count++;
                }
                // рекурсивно перечисляем дочерние узлы
                enumChildNodes(child, count);
            }
            // переходим к следующему узлу
            child = child.nextSibling;
        }
    }
}

function asideFidback() {
    var aside = document.querySelector('div.aside'),
        asideFeedback = document.querySelector('div.aside-feedback'),
        content = document.querySelector('div.content');

    document.documentElement.addEventListener('click', function (e) {
        if ($(e.target).closest('.aside-callback__link').length) {
            asideFeedback.classList.add('js-active');
            content.classList.add('js-aside-hover');
        }

        if (~e.target.className.indexOf('aside-feedback__close')) {

            asideFeedback.classList.remove('js-active');
            content.classList.remove('js-aside-hover');
        }
    })
}

//максимальная высота для блоков
$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};

//ввод в input только цифр
(function () {
    $('input.js-only-digits').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            console.log('ddd')
            return false;
        }
    });
})();

//ховер по карте изображений
(function () {
    var pointNumber;

    $('[data-point]').hover(
        function () {
            pointNumber = $(this).attr('data-point');
            $('[data-point="' + pointNumber + '"]').addClass('active');
        },
        function () {
            $('[data-point="' + pointNumber + '"]').removeClass('active');
        }
    )
})();






