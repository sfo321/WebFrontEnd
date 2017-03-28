'use strict';

(function separator() {
    var component = $('#main');

    templates.get('separator_template').then(function (template) {
        component.prepend(template);
    });
})();