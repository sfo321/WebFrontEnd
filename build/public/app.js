"use strict";
(function() {

    var sammyApp = Sammy('body', function() {

        this.get('#/', function(context) {
            context.redirect('#/home');
        });

        this.get('#/home', controllers.home.all);

        this.get('#/blog/themes', function(context) {
            context.redirect('#/blog');
        });

        this.get('#/blog', controllers.blog.many);

        this.get('#/blog/single', function(context) {
            context.redirect('#/blogsingle');
        });

        this.get('#/blogsingle', controllers.blog.single);

        this.get('#/blog/info', function(context) {
            context.redirect('#/bloginfo');
        });

        this.get('#/bloginfo', controllers.blog.info);

        this.get('#/gallery/pics', function(context) {
            context.redirect('#/pics');
        });

        this.get('#/pics', controllers.gallery.pics);

        // this.get('#/gallery', function(context) {
        //     context.redirect('#/gallery');
        // });

        this.get('#/gallery', controllers.gallery.gallery);

        this.get('#/login', function(context) {
            context.redirect('#/log');
        });
        this.get('#/users/login', function(context) {
            context.redirect('#/log');
        });
        this.get('#/log', controllers.users.login);

        this.get('#/register', function(context) {
            context.redirect('#/sign-up');
        });
        this.get('#/users/register', function(context) {
            context.redirect('#/sign-up');
        });
        this.get('#/sign-up', controllers.users.register);

    });

    $(function() {
        sammyApp.run('#/');
        var counter = 0,
            nav = 'nav',
            nrd = 'navigation--responsive--dropdown',
            nro = 'navigation--responsive--open',
            nrt = 'navigation--responsive__toggle',
            fcu = 'fa-chevron-up',
            nrds = 'navigation--responsive--dropdown--show',
            nrli = '.navigation--responsive__list__item',
            nrlil = 'navigation--responsive__list__item__link';

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

    });
}());