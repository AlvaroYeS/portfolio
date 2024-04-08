let slideIndex = 1;
let slides = document.getElementsByClassName("skill-items");
let dots = document.getElementsByClassName("punto");

MostrarSkills(slideIndex);

function skillPlus(n) {
  MostrarSkills(slideIndex += n);
}

function skillActual(n) {
  MostrarSkills(slideIndex = n);
}

function MostrarSkills(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}