/*=======================================================
            wow animation triger on section
=======================================================*/
$(function() {
    new WOW().init();
});


/*============================================
                header section
============================================*/

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


// for smooth scrolling 

$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


//close mobile menu on click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggler").click();
    });
});


$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

/*=======================================================
                position-holders section
=======================================================*/

$(function() {
    $(".counter").counterUp({
        delay: 2,
        time: 3000
    });
});




var top1 = $('#home').offset().top;
var top2 = $('#about').offset().top;
var top3 = $('#position-holders').offset().top;
var top4 = $('#students').offset().top;

$(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= top1 && scrollPos < top2) {
        $('#change').css('background-color', 'blue');
    } else if (scrollPos >= top2 && scrollPos < top3) {
        $('#change').css('background-color', '#fff');
    } else if (scrollPos >= top3) {
        $('#change').css('background-color', '#000');
    } else if (scrollPos >= top4) {
        $('#change').css('background-color', '#00f');
    }
});