'use strict';

(function category() {
    var component = $('#main');

    var data = {
        postTitle: 'Fast Drive',
        title: 'Fast Driving',
        articles: [{
            postTitle: 'I am The Best!!',
            author: 'Michael Schumacher',
            postingDate: 'August 24, 2016',
            category: 'F1 Competitions',
            commentsCount: '24',
            imageSrc: 'http://wpmedia.montrealgazette.com/2014/12/auto-prix-ger-schumacher-files.jpg?quality=55&strip=all&w=840&h=630&crop=1',
            articleBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for'
        }, {
            postTitle: 'No, I am Better than You!',
            author: 'Rubens Barrichello',
            postingDate: 'August 24, 2016',
            category: 'F1 Competitions',
            commentsCount: '24',
            imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9vW5-CuQMDYbJJTo3tRkVTG60MumDGNVuOJzPfVHiwow0eTtPp64g6X-_',
            articleBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for'
        }, {
            postTitle: 'And I am Better than You Both!',
            author: 'Christian Menzel',
            postingDate: 'August 24, 2016',
            category: 'F1 Competitions',
            commentsCount: '24',
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIJH7X_JAipBX5n-D4y12-BxCKCkiLrgYXzCbQLs-pPeeFnXMn',
            articleBody: 'Rubens Barrichello claims his former Ferrari teammate Michael Schumacher should actually be just a six-time world champion. The pair were teammates at Ferrari between 2000 and 2005, during which time Schumacher won five consecutive drivers' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for Barrichello to play second fiddle to Schumacher.' + 'Read more: http://autoweek.com/article/formula-one/rubens-barrichello-michael-schumacher-benefitted-team-orders-win-formula-one#ixzz4bQL57K00' + 'titles on his way to an Formula One-record seven.However, during that time, team boss Jean Todt also operated a clear No. 1 driver policy for Schumacher, including highly controversial team orders that called for'
        }]
    };

    templates.get('category_template').then(function (template) {
        component.prepend(template(data));
    });
})();