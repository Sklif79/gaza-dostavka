ready(function () {
    customPlaceholderInit();
    tooltipClick();
    asideNav();
    asideFidback();
    mainPage();

    hoverImages('div.nav-index', 'div.nav-index__item');
    hoverImages('ul.aside-nav', '.aside-nav__link');

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
function isMainPage() {
    let result = (location.pathname === '/') ? true : false;
    return result;
}

console.log(isMainPage())

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
            // '.slider-main li, ' +
            '.index-slider__item '
        // '.certificates-element, ' +
        // '.slider-sale '
        ;
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
        if (~e.target.className.indexOf('aside-callback__link')) {
            asideFeedback.classList.add('js-active');
            console.log(content)
            content.classList.add('js-aside-hover');
        }

        if (~e.target.className.indexOf('aside-feedback__close')) {
            asideFeedback.classList.remove('js-active');
            content.classList.remove('js-aside-hover');
        }
    })
}






