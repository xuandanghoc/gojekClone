let steps = document.getElementsByClassName('how-to-content-step-number-content');
let slideLists = document.getElementsByClassName('slide');
let slideSteps = document.getElementsByClassName('slide-step');
let slideWidth = slideLists[0].offsetWidth;
let slideWrapper = document.querySelector('.slide-lists');
let positionSlide = 0;

Array.from(steps).forEach((step, index) => {
    step.addEventListener('click', () => {
        changSlide(index);
    });
});

let changSlide = (n) => {
    Array.from(steps).forEach((element) => {
        element.className = element.className.replace('select', '');
    })
    positionX = -(slideWidth * count[n]);
    slideWrapper.style = `transform:translateX(${positionX}px)`;
    steps[n].className += ' select';
};

    // slideLists[0].addEventListener('mouseup', () => {
    //     slideWrapper.style = `transform:translateX(${-472}px)`;
    // });

// window.addEventListener('resize', changSlide);


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

window,addEventListener('resize', () => {
    if (window.innerWidth < 769) {
        for (let i = 0; i < steps; i++) {
            steps[i].addEventListener('click', () => {
                changSlide(i);
            })
        }
    }
})
