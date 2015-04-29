$(document).ready(function() {
    $('a:not(.link)').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('section').hide();
        $($(this).attr('href')).show();
        return false;
    });
});
