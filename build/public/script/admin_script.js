'use strict';

var adminComponent = function() {

    function admin() {
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

        templates.get('widget_template').then(function(template) {
            templates.get('admin_template').then(function(tempol) {
                Handlebars.registerPartial('widget', template);
                component.prepend(tempol(data));
                attach();
            });
        });

        function attach() {
            $('.form').on('click', function(ev) {
                var target = $(ev.target);
                if (target.hasClass('form__input--submit')) {
                    requester.get('/api/pilots').then(function(res) {
                        if (!res) {
                            console.log('empty be!');
                        } else {
                            $('.main__quote__container').html(JSON.stringify(res));
                        }
                    });
                }
            });
        };
    }
    return { admin: admin };
}();