let slideIndex = 0;

function changeSlide(direction) {
    let slides = document.getElementsByClassName("testimonials-card");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

function previousSlide() {
    changeSlide(-1);
}

function nextSlide() {
    changeSlide(1);
}

document.getElementById("btn-prev").addEventListener("click", previousSlide);
document.getElementById("btn-next").addEventListener("click", nextSlide);

setInterval(function() {
    nextSlide();
  }, 5000);

changeSlide(0);

//X-----------------------------------------------------------------------------------------------X

const navLinks = document.querySelectorAll('.nav-btn a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const targetTop = target.getBoundingClientRect().top + window.scrollY -95; // Adiciona a margem de 50 pixels
        window.scroll({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});