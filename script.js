$(document).ready(function() {

    function disableScroll() {
        $('html, body').on('mousewheel', function () {
            return false;
        });
    }

    function enableScroll() {
        $('html, body').off('mousewheel');
    }

    $('#button-all-news').click(function () {
        $('.popup-container').fadeIn(1000, disableScroll);
        $('.popup').animate({
            width: '200px',
            height: '300px'
        }, 400);
        $('body').css("overflow", "hidden");
    });

    $('.popup-container').click(function (event) {
        if (event.target == this) {
            $(this).fadeOut(400, enableScroll);
            $('.popup').animate({
                width: 0,
                height: 0
            }, 400);
            $('body').css("overflow", "scroll");
        }
    });
    var slideBlock = false;

    //slide menu

    $('.menu-mob').click(function () {

        if(!slideBlock) {
            $('.slide').slideDown(400);
            $('.menu-mob').toggleClass('active');
            slideBlock = true;
        }
        else {
            $('.slide').slideUp(400);
            $('.menu-mob').removeClass('active');
            slideBlock = false;
        }

    });

});


$(function () {
    $.get('https://www.cbr-xml-daily.ru/daily_json.js', function (response) {
        var json = JSON.parse(response);
        $('#eur').html(json.Valute.EUR.Value.toFixed(2));
        $('#usd').html(json.Valute.USD.Value.toFixed(2));
    });
});
