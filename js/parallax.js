$doc.on('scroll', function () {
    var imgDownturn = 0.5;
    $('.intro__introImg').css({
        "-webkit-transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)",
        "-ms-transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)",
        "transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)"
    });
});