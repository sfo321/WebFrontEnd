'use strict';

(function carousel() {
    var component = $('header');

    var images = {
        imagesArray: ['https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60'],
        incomingImages: ['https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/3e2a76d7-a5fb-49bc-b66e-76d31b753d85~sc_604.402.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/3e2a76d7-a5fb-49bc-b66e-76d31b753d85~sc_604.402.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/3e2a76d7-a5fb-49bc-b66e-76d31b753d85~sc_604.402.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/3e2a76d7-a5fb-49bc-b66e-76d31b753d85~sc_604.402.jpg']
    };

    images.activeImageURL = images.imagesArray[2];

    templates.get('carousel_template').then(function(template) {
        return new Promise(function(res, rej) {
            res(component.after(template(images)));
        }).then(function(templ) {
            attach();
        });
    });

    function attach() {
        $('#carousel_container').on('click', function(ev) {
            var elements = $('.carrousel__image'),
                container = $('.carrousel__image__container'),
                active = $('.carrousel__image--center'),
                imgSource = images.imagesArray,
                imgStorage = images.incomingImages,
                len = imgSource.length,
                target = $(ev.target);

            if (target.hasClass('fa-chevron-right')) {
                imgSource.push(imgStorage.shift());
                imgStorage.push(imgSource.shift());
                var elementToGo = elements.first(),
                    elementToCome = $("<div><img src=" + imgSource[len - 1] + "></div>").addClass('carrousel__image');
                elementToGo.addClass('shrink--right');
                container.append(elementToCome.addClass('grow--right'));
                setTimeout(function() {
                    active.attr('src', imgSource[2]);
                    elementToGo.remove();
                    elementToCome.removeClass('grow--right');
                }, 350);
            }
            if (target.hasClass('fa-chevron-left')) {
                imgSource.unshift(imgStorage.pop());
                imgStorage.unshift(imgSource.pop());
                var _elementToGo = $('.carrousel__image:nth-child(5)'),
                    _elementToCome = $("<div><img src=" + imgSource[0] + "></div>").addClass('carrousel__image');
                _elementToGo.addClass('shrink--left');
                container.prepend(_elementToCome.addClass('grow--left'));
                setTimeout(function() {
                    active.attr('src', imgSource[2]);
                    _elementToGo.remove();
                    _elementToCome.removeClass('grow--left');
                }, 350);
            }
        });
    }
})();