var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length)
        slideIndex = 0;
    slides[slideIndex++].style.display = "block";
    setTimeout(showSlides, 5000);
}