'use strict';

(function quote() {
    var component = $('#main');

    var data = 'Vivamus id feugiat ligula. Nulla facilisi. Integer lacus justo, elementum eget consequat a, molestie nec sapien. Quisque tincidunt, nunc vitae adipiscing vulputate';

    templates.get('quote_template').then(function (template) {
        component.prepend(template(data));
    });
})();