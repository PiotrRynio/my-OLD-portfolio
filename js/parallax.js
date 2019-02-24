// parallax.js are making parallax effect of intro picture (person picture). 
$doc.on('scroll', function () {
    if (($(window).width() < 1000) || (window.innerHeight > window.innerWidth)) {
        var imgDownturn = 0.5;
        $('.intro__introImg').css({
            "-webkit-transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)",
            "-ms-transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)",
            "transform": "translateY(" + ($(window).scrollTop() * +imgDownturn) + "px)"
        });
    } else {}
});