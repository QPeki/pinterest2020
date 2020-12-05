const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel_btn--right');
const prevBtn = document.querySelector('.carousel_btn--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width

const slidePosition = (silde, index) => {
    silde.style.left = slideWidth * index + 'px';
}

slides.forEach(slidePosition);

const elementsMove = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetSlide) => {
    currentDot.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const hideShowArrow = (slides, nextBtn, prevBtn, targetIndex) => {
    if (targetIndex === 0) {
        nextBtn.classList.remove('is-hidden');
        prevBtn.classList.add('is-hidden');
    } else if (targetIndex === slides.length -1) {
        nextBtn.classList.add('is-hidden');
        prevBtn.classList.remove('is-hidden');
    } else {
        nextBtn.classList.remove('is-hidden');
        prevBtn.classList.remove('is-hidden');
    }
} 

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    elementsMove(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow(slides, nextBtn, prevBtn, nextIndex);
})

prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    elementsMove(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrow(slides, nextBtn, prevBtn, prevIndex);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    elementsMove(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
    
});