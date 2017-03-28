'use strict';

(function cards() {
    var component = $('#main');

    var data = {
        cards: [{
            heading: 'What we offer',
            content: 'Rhoncus quis, varius sed velit. Mauris quis nunc eu nunc molestie egestas et sit amet odio' + 'Morbi lacinia velit in nibh sodales sed pharetra sem feugiat. Vivamus ut cursus augue.' + 'Integer sit amet arcu lorem, at egestas tellus.' + 'Phasellus tellus orci, congue at tristique at, mattis ut arcu. Donec dictum'
        }, {
            heading: 'Who we are',
            content: 'Rhoncus quis, varius sed velit. Mauris quis nunc eu nunc molestie egestas et sit amet odio' + 'Morbi lacinia velit in nibh sodales sed pharetra sem feugiat. Vivamus ut cursus augue.' + 'Integer sit amet arcu lorem, at egestas tellus.' + 'Phasellus tellus orci, congue at tristique at, mattis ut arcu. Donec dictum'
        }, {
            heading: 'Our mission',
            content: 'Rhoncus quis, varius sed velit. Mauris quis nunc eu nunc molestie egestas et sit amet odio' + 'Morbi lacinia velit in nibh sodales sed pharetra sem feugiat. Vivamus ut cursus augue.' + 'Integer sit amet arcu lorem, at egestas tellus.' + 'Phasellus tellus orci, congue at tristique at, mattis ut arcu. Donec dictum'
        }]
    };

    templates.get('card_template').then(function (template) {
        component.prepend(template(data));
    });
})();