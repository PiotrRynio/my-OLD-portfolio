const $navPage__navBar = $('.stickyUpperBar');

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            const navBarOffset = $navPage__navBar.height();
            const placeFromTop = (target.offset().top - (navBarOffset));
            event.preventDefault();
            $('html, body').animate({
                scrollTop: placeFromTop
            }, 500);
            if ($('.navMenu--active').length) {
                activeStickyNavBar();
            }
        }
    });
});