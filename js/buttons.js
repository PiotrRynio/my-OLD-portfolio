$('.btnFooter').on('click', function (event) {
    $('.footer').toggleClass('show');
    $('.btnFooter').toggleClass('show');
    if ($('.btnFooter').hasClass('show')) {
        $('.btnFooter__title').text('Close');
    } else {
        $('.btnFooter__title').text('Open more contacts and clause');
    }
});


window.addEventListener('resize', function () {
    if (($(window).width() < 1000) || (window.innerHeight > window.innerWidth)) {
        $('.footer').removeClass('show');
        $('.btnFooter').removeClass('show');
        $('.btnFooter__title').text('Open more contacts and clause');
    }
});