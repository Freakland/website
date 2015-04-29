$(document).ready(function() {
    $('.backstretch').each(function(index, item) {
        var _this = $(item);
        _this.backstretch(_this.data('background'));
    });
});
