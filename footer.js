let optionElements = document.getElementsByClassName('option-wraper');
let selectDrops = document.getElementsByClassName('select-drop');
let iconUps = document.getElementsByClassName('fa-solid fa-angle-up');
let countryLists = document.getElementsByClassName('country-items');
let languageLists = document.getElementsByClassName('language-items');
let countrySelect = document.getElementById('country');
let languageSelect = document.getElementById('language-option');

let toggle = (element, icon) => {
    if (element.style.display == 'none') {
        Array.from(selectDrops).forEach((item) => {
            item.style.display = 'none';
        });
        Array.from(iconUps).forEach((iconUp) => {
            iconUp.className = iconUp.className.replace('rotation-up');
        });
        element.style.display = 'block';
        icon.className += ' rotation-up';
    } else {
        element.style.display = 'none';
        icon.className = icon.className.replace('rotation-up');
    }
}
for (let i = 0; i < optionElements.length; i++) {
    optionElements[i].addEventListener('click', () => {
        toggle(selectDrops[i], iconUps[i]);
    });
};

for (let i = 0; i < countryLists.length; i++) {
    countryLists[i].addEventListener('click', () => {
        Array.from(countryLists).forEach((list) => {
            list.className = list.className.replace(' active', '');
        });
        let content = countryLists[i].textContent;
        countrySelect.innerHTML = content;
        countryLists[i].className += ' active';
    });
};

 for (let i = 0; i < languageLists.length; i++) {
    languageLists[i].addEventListener('click', () => {
        changeLanguage(i);
    });
 };

