
// onclick="event.stopPropagation()  //prevent event

let language = document.getElementById('language');
let selectLanguage = document.getElementById('option');
let angleLanguage = document.getElementById('angle-language');

let menuDrop = document.getElementsByClassName('menu-drop');

let iconAngle = document.getElementsByClassName('fa-solid fa-angle-down');
let menuNav = document.getElementsByClassName('header-menu-nav-items-show');

let closeElement = () => {
    Array.from(menuDrop).forEach((element) => {
        if (element.style.display == 'flex') {
            element.style.display = 'none';
        }
    })
    Array.from(iconAngle).forEach((icon) => {
        icon.className = icon.className.replace(' rotation-up', '');
    })
    Array.from(selectDrops).forEach((item) => {
        item.style.display = 'none';
    });
    Array.from(iconUps).forEach((iconUp) => {
        iconUp.className = iconUp.className.replace('rotation-up');
    });
}

document.body.addEventListener('click', () => {
    closeElement();
    selectLanguage.className += ' hidden';
});

language.addEventListener('click', () => {
    selectLanguage.classList.toggle('hidden');
    angleLanguage.classList.toggle('rotation-up');
})

for (let i = 0; i < menuNav.length; i++) {
    menuNav[i].addEventListener('click', () => {
        if (menuDrop[i].style.display == 'none') {
            Array.from(menuDrop).forEach((element) => {
                element.style.display = 'none';
            });
            Array.from(iconAngle).forEach((icon) => {
                icon.className = icon.className.replace(' rotation-up', '');
            });
            menuDrop[i].style.display = 'flex';
            iconAngle[i].className += ' rotation-up';
        } else {
            menuDrop[i].style.display = 'none';
            iconAngle[i].className = iconAngle[i].className.replace(' rotation-up', '');
        };
    });
};

let select = ['VN', 'EN'];
let languageSpan = document.getElementById('show-language');

let icons = document.getElementsByClassName('check-icon');
let languageElement = document.getElementsByClassName('language-toggle');
for (let i = 0; i < icons.length; i++) {
    languageElement[i].addEventListener('click', () => {
        changeLanguage(i)
    });
};

let changeLanguage = (index) => {
    Array.from(languageLists).forEach((list) => {
        list.className = list.className.replace(' active', '');
    });
    Array.from(icons).forEach((icon) => {
        icon.style.display = 'none';
    });
    let text = languageLists[index].textContent;
        languageSelect.innerHTML = text;
        languageLists[index].className += ' active';
        languageSpan.innerHTML = select[index];
        icons[index].style.display = 'inline';
}



