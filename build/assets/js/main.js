"use strict";

ready(function () {
    hoverImages('.aside-nav');
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

    Array.prototype.targetElement.forEach(function (item) {
        console.log(item);
    });

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