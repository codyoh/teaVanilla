const sections = document.querySelectorAll('.pre-appear');


window.addEventListener('load', (e) => {
    for(block of sections){
        block.classList.add('appear');
    }
})
