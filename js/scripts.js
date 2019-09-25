$(document).ready(function() {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 10) {
            $(".navbar").addClass('gradient');
            $(".navbar").removeClass('bg-transparent');
            $("#projects").addClass('whiteTxt');
            $("#logo").addClass('whiteTxt');
            $("#projects").removeClass('blackTxt');
            $("#logo").removeClass('blackTxt');

            // Hamburger
            $(".navbar-toggler").addClass('whiteBack');
            $(".navbar-toggler").removeClass('blackBack');
        }
        else {
            $(".navbar").addClass('bg-transparent');
            $(".navbar").removeClass('gradient');
            $("#projects").addClass('blackTxt');
            $("#logo").addClass('blackTxt');
            $("#projects").removeClass('whiteTxt');
            $("#logo").removeClass('whiteTxt');

            // Hamburger
            $(".navbar-toggler").removeClass('whiteBack');
            $(".navbar-toggler").addClass('blackBack');
        }
    });
      
});