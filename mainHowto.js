let steps = document.getElementsByClassName('how-to-content-step-number-content');
let slideLists = document.getElementsByClassName('slide');
let slideSteps = document.getElementsByClassName('slide-step');

Array.from(steps).forEach((step, index) => {
    step.addEventListener('click', () => {
        changeSlide(index);
    });
});

window.addEventListener('resize', () => {
    for (let i = 0; i < steps.length; i++) {
        changeSlide(i);
    }
})

let changeSlide = (n) => {
    Array.from(steps).forEach((element) => {
        element.className = element.className.replace('select', '');
    });
    let slideWidth = slideLists[0].offsetWidth;
    positionX = -(slideWidth * count[n]);
    let slideWrapper = document.querySelector('.slide-lists');
    slideWrapper.style = `transform:translateX(${positionX}px)`;
    steps[n].className += ' select';
};


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

// let myPromise = new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.open('GET', 'https://stttt.kiengiang.gov.vn/m/127/1193/Ma-Buu-chinh-63-tinh--thanh-pho-truc-thuoc-Trung-uong.html');
//     req.onload = () => {
//         if (req.status == 200) {
//             resolve(req.response);
//           } else {
//             reject('File not found');
//     }
// }
//     req.send();
// });


