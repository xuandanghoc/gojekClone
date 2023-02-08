let steps = document.getElementsByClassName('how-to-content-step-number-content');
let slideSteps = document.getElementsByClassName('slide-step');

Array.from(steps).forEach((step, index) => {
    step.addEventListener('click', () => {
        Array.from(slideSteps).forEach((slide) => {
            slide.style.display = 'none';
        });
        Array.from(steps).forEach((element) => {
            element.className = element.className.replace('select', '');
        })
        step.className += ' select';
        slideSteps[index].style.display = 'block';
    });
});