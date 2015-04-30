$(document).ready(function() {
    $('.backstretch').each(function(index, item) {
        var _this = $(item);
        _this.backstretch(_this.data('background'));
    });
    $('.menu').on('click', function() {
        var visible = $('.menu-items:visible').size();
        if (visible) {
            $(this).removeClass('active');
            $('.menu-items').hide();
        } else {
            $(this).addClass('active');
            $('.menu-items').show();
        }
    });
});
