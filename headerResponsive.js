let menuMobile = document.getElementById('mobile-navigation');

let optionLanguage = document.getElementById('language-nav');

let showOptionLanguage = (id) => {
    document.getElementById(id).classList.toggle('hidden');
    iconAngle[4].classList.toggle('rotation-up');
}

let navigationItems = document.getElementsByClassName('mobile-navigation-treemenu-wrapper-list-items');
let navigationContents = document.getElementsByClassName('mobile-navigation-treemenu-wrapper-list-content');
let navigationItemsTitles = document.getElementsByClassName('treemenu-wrapper-list-content-title');
for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener('click', () => {
        navigationContents[i].className += ' show';
        optionLanguage.className += ' hidden';
    });
};

for (let i = 0; i < navigationItemsTitles.length; i++) {
    navigationItemsTitles[i].addEventListener('click', () => {
        navigationContents[i].className = navigationContents[i].className.replace(' show', '');
    })
};

let changeIcon = (element) => {
    element.classList.toggle('change');
    menuMobile.classList.toggle('show');
    Array.from(navigationContents).forEach((element) => {
        element.className = element.className.replace(' show', '');
    });
    optionLanguage.className += ' hidden';
};

let serviceBoxs = document.getElementsByClassName('list-items-card');
let positionX = 0;
let box = document.querySelector('.service-wraper-list-items');
let dotsBox = document.getElementsByClassName('dot-box');
lists = document.querySelector('.service-wraper-list');
letserviceBoxsWidth = 675;
let count = [];
for (let x = 0; x < 4; x++) {
    count.push(x);
}

for (let i = 0; i < dotsBox.length; i++) {
    dotsBox[i].addEventListener('click', () => {
        slideBox(i);
    });
};
let slideBox = (e) => {
    Array.from(dotsBox).forEach((dot) => {
        dot.className = dot.className.replace(' active', '');
    });
    positionX = -(letserviceBoxsWidth * count[e]);
    box.style = `transform:translateX(${positionX}px)`;
    dotsBox[e].className += ' active';
};

    if (window.innerWidth == 1440) {
        box.className += ' raw';
    }




