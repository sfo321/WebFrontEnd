'use strict';

(function articles() {
    var component = $('#main');

    var data = {
        pictures: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96RuqQKNvFwbF2fJPruYS7UFlPciD_6J0IIPjefLrt8CIj6mK', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT-W5ylJMYMzC0gNx3YckVsBPkv2Jl3dhadJqRUwM-dcgm9pTf', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAG7yfbbcwDlUYglSfSmtMlXUXVu1RIZoGcaDG8s41S32Po8AAQ', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWuyg3QBcdZLxrLygkzZLf8SLdvi6mGUhhgm4jBqd7AW_6KGuyIA', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTuyj5jWR0n_bLgt1TOzfbYHULWMjmn0CGY_5kHHlW-AtRGV_-', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtmkp5uFTXWoKkzOSErHOo9njHaIVG2Mbdaz_Z6hhhtfK5gUaS', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXVU4Cia_lsy23oNtXIt-oSukiQJyuUZxKbsfU8nFr-Dh5_Lbc', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZTMZpGF065mzJ9d8sMCKLB_hlaCoJBaTDogfLiROUaDH5vHkz1g', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWs8H3Vb0qfCvKWabGT5qGJt9gaAwOt3f00QdLdQaHWwmw8IkH', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTltO-VGwBvmTGCnnOrgsWjajCBR-tZCan0mR9qgOgRCIcoMrT5uA', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYtWdqlkcv63QlKLvzH-CipqnezxlE0o6Bm9-WVwQ_9hk4tRsT9Q', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuRKQZPE1TVannIhK_g9V3od5N2GBTgMyYqp6BT3Pe8H8Z0ta8', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlPwu__2-4mAv65Tl-zoKAaRGpRIr7r0lTo1f0y1Xqse6t0p2jNw', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDfsre0S0uFCGqT7ybBofvv8J5oYM0veyp3UVvUbNnbj8qO8_u', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWsT8YgghAtzzZHExmRo1HF5KTupSFHWxTVDcUOpC_uMYTy90RPw']
    };

    templates.get('articles_template').then(function (template) {
        component.prepend(template(data));
    });
})();