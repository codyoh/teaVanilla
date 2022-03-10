
// this gets the sections that will be appearing onScroll
// right now it only is applied to the second section for testing
const sections = document.querySelectorAll("section")[1]

function appear() {
    let top = sections.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight) {
        sections.classList.add("appear");
    }
}

window.addEventListener('scroll', appear);