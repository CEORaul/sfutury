document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Testimonial Carousel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);
    let currentSlideIndex = 0;

    const updateSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlideIndex = index;
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlide(index);
        });
    });

    // Auto-play carousel
    setInterval(() => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        updateSlide(nextIndex);
    }, 5000);
});
