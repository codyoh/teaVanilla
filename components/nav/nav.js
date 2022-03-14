// select html objects
// hamburger icon for mobile nav display
const hamburger = document.querySelector('.hamburger i');
// the menu of links to display when hamburger icon is selected
const navLinks = document.querySelector('.nav-links');

//toggling the nav menu of links when hamburger icon is selected or not
function toggleMobileNav() {
    // toggle showing or hiding the links menu
    navLinks.classList.toggle('nav-active');
    //toggle the menu icon being burger bars or close 'X'
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
}

// add click event listener to the hamburger menu icon
// this even listener toggles visibility of the menu of links
hamburger.addEventListener('click', function () {
    console.log("clicked")
    toggleMobileNav();
});