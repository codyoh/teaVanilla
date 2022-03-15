const landingSection = document.querySelector('.landing-section');


let path = document.querySelector('path')
let path2 = document.querySelector('.vine2')
let pathLength = path.getTotalLength();

function drawVine(){
    let middleOfSection = landingSection.getBoundingClientRect().top - (landingSection.getBoundingClientRect().height / 2);
    let topOfSection = landingSection.getBoundingClientRect().top;
    
    let screenHeight = window.innerHeight;

    let percentageUpScreen = (middleOfSection / (topOfSection + (screenHeight / 2)) + 0.5);
    let drawLength = pathLength * (percentageUpScreen -1);

    console.log('percentUpScreen: ', percentageUpScreen)

    path.style.strokeDashoffset = pathLength - drawLength;
    path2.style.strokeDashoffset = pathLength - drawLength;
}



path.style.strokeDasharray = pathLength + ' ' + pathLength;
path2.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;
path2.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    drawVine();
    let topOfSection = landingSection.getBoundingClientRect().top;
    let middleOfSection = landingSection.getBoundingClientRect().top + (landingSection.getBoundingClientRect().height / 2);
    let middleOfScreen = window.innerHeight / 2;
    let topOfScreen = window.innerHeight;

    if (topOfSection < middleOfScreen) {
        landingSection.classList.add('appear')
    }

    if (middleOfSection < 0) {
        landingSection.classList.remove('appear')
    }

    console.log('middle of element: ', middleOfSection)
});

// window.addEventListener('scroll', () => {
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     var drawLength = pathLength + scrollPercentage;

//     path.style.strokeDashoffset = pathLength - drawLength;
// })