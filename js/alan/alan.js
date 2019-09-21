$(document).ready(function() {
    var isArrowDown = true;

    $("#portfolioArrow").click(function(event) {
        event.preventDefault();
        if (isArrowDown) {
            isArrowDown = false; // portfolio is now open.
            $("#arrow").attr("src", "css/alan/arrowUp.svg");
            $("html, body").animate({scrollTop: 550}, 800); // hard coded for now, $("#workexp").offset().top doesnt work
        }
        else {
            isArrowDown = true; // portfolio is closed.
            $("#arrow").attr("src", "css/alan/arrowDown.svg");
        }        
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 549) {
            $("#backToTopDiv").removeClass('hide');
        }
        else {
            $("#backToTopDiv").addClass('hide');
        }
    });

    $("#backToTop").click(function(event) {
        $("html, body").animate({scrollTop: 0}, 800);
    });
});