$(document).ready(function() {
    let slides = $('#slideshow .slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
    }

    $('#slide-thumbs img').on('click', function() {
        let index = $('#slide-thumbs img').index(this);
        showSlide(index);
        currentIndex = index;
    });

    // Automatic slide change every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});
