'use strict';

jQuery.fn.rotate = function (degrees, width) {
    $(this).css({
        '-webkit-transform': 'rotateY(' + degrees + 'deg)',
        '-moz-transform': 'rotateY(' + degrees + 'deg)',
        '-ms-transform': 'rotateY(' + degrees + 'deg)',
        'transform': 'rotateY(' + degrees + 'deg)',
        'width': width + '%'
    });
    return $(this);
};

data.forEach(function (el) {
    var component = $(el.component);
    getSource(el.source).then(function (result) {
        component.after(result);
    });
});