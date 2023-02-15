let slideFirst = document.getElementsByClassName('banner-slide-first');
let slideSecond = document.getElementsByClassName('banner-slide-second');

let dots = document.getElementsByClassName('dot');
let slides = document.getElementsByClassName('banner-slide-show');

setInterval(() => {
    if (dots[0].className.includes(' active')) {
        dots[0].className = dots[1].className.replace(' active', '');
        slides[0].style.display = 'none';
        dots[1].className += ' active';
        slides[1].style.display = 'block';

    } else {
        dots[1].className = dots[1].className.replace(' active', '');
        slides[1].style.display = 'none';
        dots[0].className += ' active';
        slides[0].style.display = 'block';
    }
}, 5000);

Array.from(dots).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        Array.from(dots).forEach((dot) => {
            dot.className = dot.className.replace(' active', '');
        })
        Array.from(slides).forEach((slide) => {
            slide.style.display = 'none';
        })
    dot.className += ' active';
    slides[index].style.display = 'block';
    });
    
});
Array.from(dots).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        console.log('hi');
    });
    
});




    
