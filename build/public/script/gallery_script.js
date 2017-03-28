'use strict';

(function gallery() {
    var component = $('#main');

    var data = {
        images: ['https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60']
    };

    templates.get('gallery_template').then(function (template) {
        return new Promise(function (res, rej) {
            res(template(data));
        }).then(function (templ) {
            component.prepend(templ);
        });
    });
})();