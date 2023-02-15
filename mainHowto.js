let steps = document.getElementsByClassName('how-to-content-step-number-content');
let slideLists = document.getElementsByClassName('slide');
let slideSteps = document.getElementsByClassName('slide-step');
let slideWidth = slideLists[0].offsetWidth;
let slideWrapper = document.querySelector('.slide-lists');
let positionSlide = 0;

Array.from(steps).forEach((step, index) => {
    step.addEventListener('click', () => {
        Array.from(steps).forEach((element) => {
            element.className = element.className.replace('select', '');
        })
        positionX = -(slideWidth * count[index]);
        slideWrapper.style = `transform:translateX(${positionX}px)`;
        steps[index].className += ' select';
    });
});

// let currentPromise = new Promise((resolve, reject) => {
//     let condition = true;
//     if (condition) {
//         setTimeout(() => {
//             resolve('Success');
//         }, 3000);
//     } else {
//         reject('Error');
//     }
// });

// currentPromise.then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })