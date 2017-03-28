var controllers = controllers || {};

(function(scope) {
    function pics(context) {
        (function pics() {
            var component = $('#main');
            $('#main').html('');
            $('#caruzel___container').remove();
            var data = {
                pictures: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96RuqQKNvFwbF2fJPruYS7UFlPciD_6J0IIPjefLrt8CIj6mK', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT-W5ylJMYMzC0gNx3YckVsBPkv2Jl3dhadJqRUwM-dcgm9pTf', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAG7yfbbcwDlUYglSfSmtMlXUXVu1RIZoGcaDG8s41S32Po8AAQ', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWuyg3QBcdZLxrLygkzZLf8SLdvi6mGUhhgm4jBqd7AW_6KGuyIA', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTuyj5jWR0n_bLgt1TOzfbYHULWMjmn0CGY_5kHHlW-AtRGV_-', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtmkp5uFTXWoKkzOSErHOo9njHaIVG2Mbdaz_Z6hhhtfK5gUaS', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXVU4Cia_lsy23oNtXIt-oSukiQJyuUZxKbsfU8nFr-Dh5_Lbc', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZTMZpGF065mzJ9d8sMCKLB_hlaCoJBaTDogfLiROUaDH5vHkz1g', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWs8H3Vb0qfCvKWabGT5qGJt9gaAwOt3f00QdLdQaHWwmw8IkH', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTltO-VGwBvmTGCnnOrgsWjajCBR-tZCan0mR9qgOgRCIcoMrT5uA', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYtWdqlkcv63QlKLvzH-CipqnezxlE0o6Bm9-WVwQ_9hk4tRsT9Q', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuRKQZPE1TVannIhK_g9V3od5N2GBTgMyYqp6BT3Pe8H8Z0ta8', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlPwu__2-4mAv65Tl-zoKAaRGpRIr7r0lTo1f0y1Xqse6t0p2jNw', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDfsre0S0uFCGqT7ybBofvv8J5oYM0veyp3UVvUbNnbj8qO8_u', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWsT8YgghAtzzZHExmRo1HF5KTupSFHWxTVDcUOpC_uMYTy90RPw']
            };

            templates.get('articles_template').then(function(template) {
                component.prepend(template(data));
            });
        })();
    }

    function gallery(context) {
        (function gallery() {

            $('#main').html('');
            $('#caruzel___container').remove();
            var component = $('#main');

            var data = {
                images: ['https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/18826a1c-be48-4f94-b23a-b5b54dc9a3a8~sc_500.375.fit?quality=60', 'https://apis.xogrp.com/media-api/images/db9c05a8-9545-42da-9e73-03b597556c76~sc_500.375.fit?quality=60', 'https://media-api.xogrp.com/images/5288a311-fad5-43c4-adee-dc2e6ee01bd9~rs_604.402.fit.jpg', 'https://apis.xogrp.com/media-api/images/bd4deb95-2111-4c52-9d4c-ae41df7c87db~sc_500.375.fit?quality=60']
            };

            templates.get('gallery_template2').then(function(template) {
                return new Promise(function(res, rej) {
                    res(template(data));
                }).then(function(templ) {
                    component.prepend(templ);
                });
            });
        })();
    }

    scope.gallery = {
        pics,
        gallery
    };
}(controllers));