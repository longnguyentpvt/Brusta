$(document).ready(function () {
    var slider = $('#brusta-gallery > ul').lightSlider({
        auto: true,
        controls: false,
        slideMargin: 10,
        autoWidth: true,
        pager: false,
        speed: 1000,
        pauseOnHover: true,
        pause: 5000,
        loop: true
    });

    $('#prv-slider').click(function () {
        slider.goToPrevSlide();
    });
    $('#nxt-slider').click(function () {
        slider.goToNextSlide();
    });
});