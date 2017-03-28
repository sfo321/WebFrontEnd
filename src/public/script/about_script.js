'use strict';

var aboutComponent = function() {

    function about() {
        console.log('about!!!');
        var component = $('#main');

        var data = [{
            heading: 'The Winner!',
            title: 'Michael Wins!',
            text: 'After 100 laps of max speed, he wins again!',
            img: 'http://wpmedia.montrealgazette.com/2014/12/auto-prix-ger-schumacher-files.jpg?quality=55&strip=all&w=840&h=630&crop=1'
        }, {
            heading: 'The second!',
            title: 'Barrichello second!',
            text: 'He has no luck this time!',
            img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9vW5-CuQMDYbJJTo3tRkVTG60MumDGNVuOJzPfVHiwow0eTtPp64g6X-_'
        }, {
            heading: 'Chance or what?',
            title: 'I am the best!',
            text: 'This was the last chance i gave to Michael!',
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIJH7X_JAipBX5n-D4y12-BxCKCkiLrgYXzCbQLs-pPeeFnXMn'
        }];

        var tempol = void 0;

        templates.get('widget.pic_template').then(function(template) {
            templates.get('about_template').then(function(tempol) {
                Handlebars.registerPartial('widget', template);
                component.prepend(tempol(data));
            });
        });
    }

    return { about };
}();