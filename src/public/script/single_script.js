'use strict';

(function single() {
    var component = $('#main');

    var data = [{
        heading: 'Latest Postststs22',
        text: 'Rhoncus quis, varius sed velit. Mauris quis nunc eu nunc molestie egestas et' + 'sit amet odio. Morbi lacinia velit in nibh sodales sed pharetra sem feugiat. Vivamus ut cursus' + 'augue. Integer sit amet arcu lorem, at egestas tellus. Phasellus tellus orci, congue at tristique...'
    }, {
        heading: 'Recent Postststs',
        lists: ['Meget lacus hendrerit et egestas', 'Vestibulum erat ante, laoreet', 'varius sed velit mauris quis nunc', 'Vivamus convallis magna', 'nibh id felis lacinia a iaculis nisi vest', 'Lorem ipsum dolor']
    }, {
        heading: 'Recent Postststs22',
        lists: ['Meget lacus hendrerit et egestas', 'Vestibulum erat ante, laoreet', 'varius sed velit mauris quis nunc', 'Vivamus convallis magna', 'nibh id felis lacinia a iaculis nisi vest', 'Lorem ipsum dolor']
    }];

    templates.get('widget_template').then(function (template) {
        templates.get('single_template').then(function (tempol) {
            Handlebars.registerPartial('widget', template);
            component.prepend(tempol(data));
            attach();
        });
    });

    function attach() {}
})();