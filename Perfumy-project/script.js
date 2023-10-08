var slideIndexMen = 0;
var slideIndexWomen = 0;
var slideIndexUnisex = 0;

showSlidesMen();
showSlidesWomen();
showSlidesUnisex();

function showSlidesMen() {
    var i;
    var slides = document.getElementsByClassName("mySlides-men");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexMen++;
    if (slideIndexMen > slides.length) {
        slideIndexMen = 1;
    }
    slides[slideIndexMen - 1].style.display = "block";
    setTimeout(showSlidesMen, 2000);
}

function showSlidesWomen() {
    var i;
    var slides = document.getElementsByClassName("mySlides-women");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexWomen++;
    if (slideIndexWomen > slides.length) {
        slideIndexWomen = 1;
    }
    slides[slideIndexWomen - 1].style.display = "block";
    setTimeout(showSlidesWomen, 2000);
}

function showSlidesUnisex() {
    var i;
    var slides = document.getElementsByClassName("mySlides-unisex");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexUnisex++;
    if (slideIndexUnisex > slides.length) {
        slideIndexUnisex = 1;
    }
    slides[slideIndexUnisex - 1].style.display = "block";
    setTimeout(showSlidesUnisex, 2000);
}
