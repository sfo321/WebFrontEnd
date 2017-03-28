'use strict';

(function article() {
    var component = $('#main');

    var data = {
        postTitle: 'Fast Drive',
        title: 'Fast Driving',
        author: 'Michael Schumacher',
        postingDate: 'August 24, 2016',
        category: 'F1 Competitions',
        commentsCount: '24',
        imageSrc: 'http://wpmedia.montrealgazette.com/2014/12/auto-prix-ger-schumacher-files.jpg?quality=55&strip=all&w=840&h=630&crop=1',
        articleBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00',
        comments: [{
            imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9vW5-CuQMDYbJJTo3tRkVTG60MumDGNVuOJzPfVHiwow0eTtPp64g6X-_',
            commentDate: 'August 24, 2016',
            commentAuthor: 'Rubens Barrichello',
            commentBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00'
        }, {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIJH7X_JAipBX5n-D4y12-BxCKCkiLrgYXzCbQLs-pPeeFnXMn',
            commentDate: 'August 24, 2016',
            commentAuthor: 'Christian Menzel',
            commentBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00'
        }],
        reply: [{
            imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9vW5-CuQMDYbJJTo3tRkVTG60MumDGNVuOJzPfVHiwow0eTtPp64g6X-_',
            commentDate: 'August 24, 2016',
            commentAuthor: 'Rubens Barrichello',
            commentBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.'
        }, {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIJH7X_JAipBX5n-D4y12-BxCKCkiLrgYXzCbQLs-pPeeFnXMn',
            commentDate: 'August 24, 2016',
            commentAuthor: 'Christian Menzel',
            commentBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.'
        }],
        data: [{
            heading: 'Latest Postststs22',
            text: 'Rhoncus quis, varius sed velit. Mauris quis nunc eu nunc molestie egestas et' + 'sit amet odio. Morbi lacinia velit in nibh sodales sed pharetra sem feugiat. Vivamus ut cursus' + 'augue. Integer sit amet arcu lorem, at egestas tellus. Phasellus tellus orci, congue at tristique...'
        }, {
            heading: 'Recent Postststs',
            lists: ['Meget lacus hendrerit et egestas', 'Vestibulum erat ante, laoreet', 'varius sed velit mauris quis nunc', 'Vivamus convallis magna', 'nibh id felis lacinia a iaculis nisi vest', 'Lorem ipsum dolor']
        }, {
            heading: 'Recent Postststs22',
            lists: ['Meget lacus hendrerit et egestas', 'Vestibulum erat ante, laoreet', 'varius sed velit mauris quis nunc', 'Vivamus convallis magna', 'nibh id felis lacinia a iaculis nisi vest', 'Lorem ipsum dolor']
        }]
    };

    templates.get('widget_template').then(function (template) {
        templates.get('article_template').then(function (tempol) {
            Handlebars.registerPartial('widget', template);
            component.prepend(tempol(data));
            attach();
        });
    });

    var loggedUser = false;

    function attach() {
        $('footer').on('click', function (ev) {
            var target = $(ev.target),
                warn = $('.article__footer__info--warn');
            if (target.hasClass('article__footer__info__comment') && loggedUser) {
                var container = $('.form__container');
                if (container.hasClass('hidden')) {
                    container.removeClass('hidden');
                    warn.addClass('hidden');
                } else {
                    container.addClass('hidden');
                    warn.removeClass('hidden');
                }
            } else if (!loggedUser) {
                warn.html('You must be logged in to leave a Comment!');
            }
        });
    }
})();