const landingSection = document.querySelector('.landing-section');


let path = document.querySelector('path')
let path2 = document.querySelector('.vine2')
let pathLength = path.getTotalLength();

function drawVine(){
    let middleOfSection = landingSection.getBoundingClientRect().top - (landingSection.getBoundingClientRect().height / 2);
    let topOfSection = landingSection.getBoundingClientRect().top;
    
    let screenHeight = window.innerHeight;

    let percentageUpScreen = (middleOfSection / (topOfSection + (screenHeight / 2))) - 0.5;
    console.log(percentageUpScreen)
    let drawLength = pathLength * percentageUpScreen;

    path.style.strokeDashoffset = pathLength - drawLength;
    path2.style.strokeDashoffset = pathLength - drawLength;
}



path.style.strokeDasharray = pathLength + ' ' + pathLength;
path2.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;
path2.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', drawVine);

// window.addEventListener('scroll', () => {
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     var drawLength = pathLength + scrollPercentage;

//     path.style.strokeDashoffset = pathLength - drawLength;
// })