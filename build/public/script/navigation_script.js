/* golbals $ */

'use strict';

(function navi() {
    var counter = 0,
        nav = 'nav',
        nrd = 'navigation--responsive--dropdown',
        nro = 'navigation--responsive--open',
        nrt = 'navigation--responsive__toggle',
        fcu = 'fa-chevron-up',
        nrds = 'navigation--responsive--dropdown--show',
        nrli = '.navigation--responsive__list__item',
        nrlil = 'navigation--responsive__list__item__link';

    // const data = [
    // {
    //     component: '#main',
    //     source: "./script/carousel_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/gallery_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/category_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/article_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/articles_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/single_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/separator_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/admin_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/quote_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/cards_script.js"
    // },
    // {
    //     component: '#main',
    //     source: "./script/about_script.js"
    // }
    // ];

    // data.forEach(el => {
    //     let component = $('body'),
    //         source = el.source,
    //         element = $("<script src=" + source + "></script>");
    //     component.append(element);
    // })

    // aboutComponent.about();
    // adminComponent.admin();

    function hideAll(trgetClass, childernClass, classToRemove, classToAdd) {
        $(trgetClass).siblings().children(childernClass).removeClass(classToRemove).addClass(classToAdd);
    }

    function showOne(trgetClass, siblingClass, classToRemove, classToAdd) {
        $(trgetClass).siblings(siblingClass).removeClass(classToRemove).addClass(classToAdd);
    }

    function hideOne(trgetClass, siblingClass, classToRemove, classToAdd) {
        showOne(trgetClass, siblingClass, classToAdd, classToRemove);
    }

    var navresp = $('#navresp');

    $(window).on('resize', function() {
        var win = $(this);
        console.log(win.width());
        if (win.width() >= 720) {
            hideAll(nrli, nav, nrds, nrd);
            navresp.removeClass(nro);
        }
    });

    $('#nav').on('click', function(ev) {
        var target = $(ev.target);
        if (target.hasClass(fcu) && navresp.hasClass(nro)) {
            navresp.removeClass(nro);
        };
        if (target.hasClass(nrt)) {
            if (!navresp.hasClass(nro)) {
                navresp.addClass(nro);
            } else {
                navresp.removeClass(nro);
            }
        }
    });

    navresp.on('click', function(ev) {
        var target = $(ev.target);
        if ((target.hasClass(fcu) || target.children('span').hasClass(fcu)) && navresp.hasClass(nro)) {
            navresp.removeClass(nro);
        };
        if (target.hasClass(nrlil)) {
            if (counter === 0) {
                showOne(target, nav, nrd, nrds);
                counter += 1;
            } else if (counter === 1 && target.siblings(nav).hasClass(nrds)) {
                hideOne(target, nav, nrd, nrds);
                counter -= 1;
            } else {
                hideAll(nrli, nav, nrds, nrd);
                showOne(target, nav, nrd, nrds);
            }
        }
    });

    $('#main-nav').on('mouseenter', '.navigation__list__item', function(ev) {
        var target = $(ev.currentTarget);
        if (target.hasClass('navigation__list__item') && !target.children('.navigation--dropdown').hasClass('navigation--dropdown--show')) {
            target.children('.navigation--dropdown').addClass('navigation--dropdown--show').stop();
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    $('#main-nav').off('mouseleave');
    $('#main-nav').on('mouseleave', '.navigation__list__item', function(ev) {
        var target = $(ev.currentTarget);
        if (target.hasClass('navigation__list__item') && target.children('.navigation--dropdown').hasClass('navigation--dropdown--show')) {
            target.children('.navigation--dropdown').removeClass('navigation--dropdown--show');
        }
    });
})();