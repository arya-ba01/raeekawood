const slider = document.querySelector('.special_offer_container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mouseDown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseLeave', () => {
    isDown = false;
    slider.classList.remove('active')
});
slider.addEventListener('mouseUp', () => {
    isDown = false;
    slider.classList.remove('active')
});
slider.addEventListener('mouseMove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x =e.pageX - slider.offsetLeft;
    const walk = (x -startX);
    slider.scrollLeft = scrollLeft - walk;
});