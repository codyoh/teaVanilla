const sectionsToAppear = document.querySelectorAll('.pre-appear');
const sectionsToAppearLate = document.querySelectorAll('.pre-appear-late');
const leftImg = document.querySelector('.pre-appear-left');
const rightImg = document.querySelector('.pre-appear-right');

window.addEventListener('load', (e) => {
    for(section of sectionsToAppear){
        section.classList.add('appear');
    }

    for(section of sectionsToAppearLate){
        section.classList.add('appear');
    }

    leftImg.classList.add('appear');
    rightImg.classList.add('appear');
})
