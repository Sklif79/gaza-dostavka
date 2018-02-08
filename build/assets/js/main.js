'use strict';

ready(function () {
    var el = document.querySelector('.aside-nav');

    el.addEventListener('mouseover', handlerNavMouseover);
    el.addEventListener('mouseout', handlerNavMouseout);

    //обработчик делегирования по ховера
    var currentElem = null;

    function handlerNavMouseover(event) {
        var target = event.target;

        if (currentElem) return;

        // уж не на TD ли?
        while (target != this) {
            if (target.tagName == 'LI') break;
            target = target.parentNode;
        }

        if (target == this) return;

        currentElem = target;

        console.log('навели');
        // target.style.background = 'pink';
    }

    function handlerNavMouseout(event) {
        if (!currentElem) return;

        var relatedTarget = event.relatedTarget;

        if (relatedTarget) {
            while (relatedTarget) {
                if (relatedTarget == currentElem) return;
                relatedTarget = relatedTarget.parentNode;
            }
        }

        // произошло событие mouseout, курсор ушёл
        // currentElem.style.background = '';
        currentElem = null;
        console.log('убрали');
    }
});

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function hoverImages(targetHover) {
    var targetElement = document.documentElement.querySelectorAll(targetHover);

    // let newSrc, src, oldSrc;
    //
    // //делегируем события для контейнера
    // $('.aside-nav__link').on('mouseenter', img, function () {
    //     newSrc = $(this).attr("data-src-hover");
    //     oldSrc = $(this).attr("src");
    //     src = $(this).attr("src", newSrc);
    // });
    //
    // $('.aside-nav__link').on('mouseleave', img, function () {
    //     $(this).attr("src", oldSrc);
    // });
}